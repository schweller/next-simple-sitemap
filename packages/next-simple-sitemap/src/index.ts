import { getNextRoutes } from "./utils/next";

type DefaultOptions = {
  baseUrl: string;
};

export function main(opts: DefaultOptions) {
  if (!opts.baseUrl) {
    throw new Error("No baseUrl was defined");
  }
  return getNextRoutes();
}
