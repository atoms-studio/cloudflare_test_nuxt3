import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Cache-Control", "max-age=10, s-maxage=10");
  res.setHeader("Cloudflare-CDN-Cache-Control", "max-age=10");
  res.setHeader("CDN-Cache-Control", "10");
  res.setHeader("Max-Age", "10");
};