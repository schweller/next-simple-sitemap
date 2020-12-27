import path from "path";
import load from "./load";

export function getNextConfig() {
  const configPath = path.resolve(process.cwd(), "./next.config.js");
  return load(configPath);
}

export function getNextRoutes() {
  const nextConfig = getNextConfig();
  const nextBuildDir =
    nextConfig && nextConfig.distDir ? nextConfig.distDir : ".next";
  const routesManifest = load(
    path.join(process.cwd(), nextBuildDir, "routes-manifest.json")
  );

  return routesManifest;
}
