import fs from "fs";
import path from "path";

function loadFile(path: string) {
  if (fs.existsSync(path)) {
    return require(path);
  }
}

export function getNextConfig(basePath: string) {
  const configPath = path.resolve(basePath, "./next.config.js");
  return loadFile(configPath);
}

export function readRoutes() {
  const nextConfig = getNextConfig(process.cwd());
  const nextBuildDir =
    nextConfig && nextConfig.distDir ? nextConfig.distDir : ".next";
  return nextBuildDir;
  // to implement:
  // const routesManifestSrc = "./.next/routes-manifest.json";
  // const routes = fs.readFileSync(routesManifestSrc);
  // const { dataRoutes } = JSON.parse(Buffer.from(routes).toString());
  // return dataRoutes;
}
