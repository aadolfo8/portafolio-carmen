import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ["vicio-trashy-agreement", "vicio"],
      ["sin-nieve-no-hay-sociedad", "sin-nieve"],
      ["notco-resaca-off-the-map", "notco"],
      ["spotify-vpn-generator", "spotify-vpn"],
      ["zalando-dress-they-up", "zalando"],
      ["nike-ellas", "nike"],
      ["audible-hazlo-mas-facil", "audible"],
      ["durex-xl", "durex"],
      ["spotify-plan-familiar", "spotify-familiar"],
      ["giffgaff-thief-shop", "giffgaff"],
      ["dgtxapple-familiar-voices", "dgtxapple-familiar-voices"],
    ].map(([source, id]) => ({ source: `/${source}`, destination: `/projects/${id}`, permanent: true }));
  },
};

export default nextConfig;
