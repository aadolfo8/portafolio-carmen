"""Genera las imágenes del README: el hero SVG y las capturas de la web.

Uso, desde la raíz del repo y con la web sirviéndose (`npm run build && npm start`):

    python docs/readme/generar.py                 # hero + capturas de http://localhost:3000
    python docs/readme/generar.py --url http://localhost:3124
    python docs/readme/generar.py --solo-hero     # sin capturas

Las fuentes (Anton y Space Mono, las mismas que carga `src/app/layout.tsx`) se descargan una
vez de @fontsource y se incrustan en el SVG para que GitHub lo pinte igual que la web.
Las capturas se hacen con Chrome en modo headless y se guardan como JPG ligeros.
Requiere Pillow.
"""

import argparse
import base64
import io
import json
import shutil
import subprocess
import tempfile
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
CACHE = Path(tempfile.gettempdir()) / "portafolio-carmen-readme"
CACHE.mkdir(exist_ok=True)
CDN = "https://cdn.jsdelivr.net/npm/@fontsource"

# Tokens de `src/app/globals.css`.
BG, FG, SECONDARY, MUTED = "#f2f2f2", "#252525", "#e7e7e7", "#646464"

CHROME_CANDIDATES = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "google-chrome",
    "chromium",
]

# nombre, ruta, ancho x alto de ventana, escala, ancho final (px), recorte (top, alto) opcional
CAPTURAS = [
    ("home", "/", (1440, 900), 2, 1600, None),
    ("home-completa", "/", (1440, 3700), 1, 1000, (0, 3020)),
    ("sobre-mi", "/", (1440, 5200), 1, 1440, (4013, 662)),
    ("proyecto", "/projects/goiko-risketos", (1440, 1000), 2, 1600, None),
    ("movil-home", "/", (390, 844), 3, 600, None),
    ("movil-proyecto", "/projects/liga-f-que-viene", (390, 844), 3, 600, None),
    ("movil-goiko", "/projects/goiko-risketos", (390, 844), 3, 600, None),
]


# ---------------------------------------------------------------- hero


def font(pkg: str, file: str, family: str) -> str:
    local = CACHE / file
    if not local.exists():
        urllib.request.urlretrieve(f"{CDN}/{pkg}/files/{file}", local)
    data = base64.b64encode(local.read_bytes()).decode()
    return f"@font-face{{font-family:'{family}';src:url(data:font/woff2;base64,{data}) format('woff2');}}"


def thumb(src: str, w: int, h: int) -> str:
    """Portada de un proyecto recortada a w×h (×2 para pantallas retina), como JPG base64."""
    if src.startswith("http"):
        local = CACHE / src.rsplit("/", 2)[-2]
        if not local.exists():
            urllib.request.urlretrieve(src, local)
        img = Image.open(local)
    else:
        img = Image.open(PUBLIC / src.lstrip("/"))
    img = img.convert("RGB")
    tw, th = w * 2, h * 2
    scale = max(tw / img.width, th / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left, top = (img.width - tw) // 2, (img.height - th) // 2
    img = img.crop((left, top, left + tw, top + th))
    buf = io.BytesIO()
    img.save(buf, "JPEG", quality=72, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def hero(projects: list[dict]) -> str:
    W, H = 1280, 560
    anton = font("anton@5.1.0", "anton-latin-400-normal.woff2", "Anton")
    mono = font("space-mono@5.1.0", "space-mono-latin-400-normal.woff2", "SpaceMono")
    label = "font-family:SpaceMono,ui-monospace,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase"
    display = "font-family:Anton,'Arial Narrow',Impact,sans-serif;text-transform:uppercase"

    years = sorted({p["year"] for p in projects})
    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" '
        f'aria-label="Carmen Puche, directora de arte en Madrid: portfolio">',
        "<title>Carmen Puche, directora de arte en Madrid: portfolio</title>",
        f"<style>{anton}{mono}.l{{{label};fill:{FG}}}.m{{{label};fill:{MUTED}}}.d{{{display};fill:{FG}}}"
        f"line{{stroke:{FG};stroke-width:1}}</style>",
        f'<rect width="{W}" height="{H}" fill="{BG}"/>',
        # Cabecera, como `SiteHeader`.
        f'<text class="d" x="14" y="38" font-size="31">Carmen Puche</text>',
        '<line x1="196" y1="0" x2="196" y2="56"/>',
        '<text class="m" x="212" y="32">Directora de arte</text>',
        f'<line x1="{W - 132}" y1="0" x2="{W - 132}" y2="56"/>',
        f'<text class="l" x="{W - 116}" y="32"><tspan text-decoration="underline">ESP</tspan>'
        f'<tspan fill="{MUTED}"> | ENG</tspan></text>',
        f'<line x1="0" y1="56.5" x2="{W}" y2="56.5"/>',
        # Titular y ficha.
        f'<text class="m" x="14" y="86">Portfolio · {years[0]}—{years[-1]}</text>',
        f'<text class="d" x="10" y="232" font-size="146" textLength="{W - 330}" lengthAdjust="spacingAndGlyphs">Dirección de arte</text>',
        f'<line x1="{W - 290}" y1="57" x2="{W - 290}" y2="262"/>',
    ]
    ficha = [("Proyectos", str(len(projects))), ("Base", "Madrid"), ("Idiomas", "ES / EN")]
    for i, (k, v) in enumerate(ficha):
        y = 57 + i * 68
        out.append(f'<text class="m" x="{W - 274}" y="{y + 26}">{k}</text>')
        out.append(f'<text class="l" x="{W - 274}" y="{y + 50}">{v}</text>')
        if i < len(ficha) - 1:
            out.append(f'<line x1="{W - 290}" y1="{y + 68}" x2="{W}" y2="{y + 68}"/>')
    out.append(f'<line x1="0" y1="262.5" x2="{W}" y2="262.5"/>')

    # Mosaico con las seis primeras portadas.
    n, top, img_h, row_h = 6, 263, 240, 54
    w = W / n
    for i, p in enumerate(projects[:n]):
        x = round(i * w)
        cw = round((i + 1) * w) - x
        out.append(
            f'<image href="{thumb(p["image"], cw, img_h)}" x="{x}" y="{top}" width="{cw}" height="{img_h}" '
            'preserveAspectRatio="xMidYMid slice"/>'
        )
        y = top + img_h
        out.append(f'<line x1="{x}" y1="{y + 0.5}" x2="{x + cw}" y2="{y + 0.5}"/>')
        out.append(f'<text class="m" x="{x + 12}" y="{y + 22}">{i + 1:02d}  {esc(p["client"])}</text>')
        title = p["title"] if len(p["title"]) <= 22 else p["title"][:21].rstrip(" .,") + "…"
        out.append(f'<text class="d" x="{x + 12}" y="{y + 45}" font-size="19">{esc(title)}</text>')
        if i:
            out.append(f'<line x1="{x + 0.5}" y1="{top}" x2="{x + 0.5}" y2="{H}"/>')
    out.append(f'<line x1="0" y1="{H - 0.5}" x2="{W}" y2="{H - 0.5}"/>')
    out.append("</svg>")
    return "".join(out)


# ---------------------------------------------------------------- capturas


def chrome() -> str:
    for c in CHROME_CANDIDATES:
        if Path(c).exists() or shutil.which(c):
            return c
    raise SystemExit("No encuentro Chrome ni Edge para hacer las capturas.")


def capturar(url: str) -> None:
    exe = chrome()
    perfil = CACHE / "chrome-profile"  # perfil propio: si no, un Chrome abierto se queda la orden
    raw = CACHE / "raw"
    raw.mkdir(exist_ok=True)
    for nombre, ruta, (w, h), escala, ancho, recorte in CAPTURAS:
        png = raw / f"{nombre}.png"
        subprocess.run(
            [
                exe, "--headless", "--disable-gpu", "--hide-scrollbars", "--mute-audio",
                f"--user-data-dir={perfil}", f"--force-device-scale-factor={escala}",
                f"--window-size={w},{h}", "--virtual-time-budget=15000",
                f"--screenshot={png}", url.rstrip("/") + ruta,
            ],
            check=True, capture_output=True,
        )
        img = Image.open(png).convert("RGB")
        if recorte:
            y, alto = (v * escala for v in recorte)
            img = img.crop((0, y, img.width, y + alto))
        img = img.resize((ancho, round(img.height * ancho / img.width)), Image.LANCZOS)
        img.save(OUT / f"{nombre}.jpg", "JPEG", quality=82, optimize=True, progressive=True)
        print(f"  {nombre}.jpg  {img.width}×{img.height}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://localhost:3000")
    parser.add_argument("--solo-hero", action="store_true")
    args = parser.parse_args()

    projects = json.loads((ROOT / "src/data/projects.json").read_text(encoding="utf-8"))
    (OUT / "hero.svg").write_text(hero(projects), encoding="utf-8")
    print("  hero.svg")
    if not args.solo_hero:
        capturar(args.url)


if __name__ == "__main__":
    main()
