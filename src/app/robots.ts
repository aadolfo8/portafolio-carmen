import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://carmenpuche.com/sitemap.xml",
    host: "https://carmenpuche.com",
  };
}
