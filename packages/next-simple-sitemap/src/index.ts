import path from "path";
import fs from "fs";
import { SitemapStream } from "sitemap";
import { getNextRoutes } from "./utils/next";

type DefaultOptions = {
  baseUrl: string;
};

export function main(opts: DefaultOptions) {
  if (!opts.baseUrl) {
    throw new Error("No baseUrl was defined");
  }
  const dataRoutes = getNextRoutes();
  // Todo: move this logic from here
  // Todo: make it configurable
  const routeValues = dataRoutes
    .map((route) => route.page)
    .map((route) => ({
      url: route,
      changefreq: "daily",
      priority: 0.7,
    }));

  // Todo: make write configurable
  // Todo: work on multiple sitemaps latere
  const writeStream = fs.createWriteStream(
    path.resolve(process.cwd(), "./public/sitemap.xml")
  );
  const sitemap = new SitemapStream({
    hostname: opts.baseUrl,
  });
  sitemap.pipe(writeStream);
  routeValues.forEach((link) => sitemap.write(link));
  sitemap.end();
  return routeValues;
}
