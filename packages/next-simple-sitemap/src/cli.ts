#!/usr/bin/env node
import arg from "arg";
import { main } from "./";

const argSpec = {
  "--version": Boolean,
  "--help": Boolean,
  "--base-url": String,
};
const argv = arg(argSpec);

if (argv["--version"]) {
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  const packagejson = require("../../package.json");
  console.log(packagejson.version);
} else if (argv["--help"]) {
  console.log(`
Generates a sitemap xml from your next.js routes.
Options:
  --help                 Print this text
  --version              Print the version
  --base-url             Ensure the passed in file is conforms to the sitemap spec
# examples
Generate a sitemap file
  npx next-simple-sitemap --base-url https://example.com
`);
} else if (argv["--base-url"]) {
  console.log(`
    Creating sitemap.xml for base url: ${argv["--base-url"]}
  `);
  console.log(main({ baseUrl: argv["--base-url"] }));
}
