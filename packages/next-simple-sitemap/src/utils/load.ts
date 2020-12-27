import fs from "fs";

export default function load(path: string) {
  if (fs.existsSync(path)) {
    return require(path);
  } else {
    throw new Error("File not found");
  }
}
