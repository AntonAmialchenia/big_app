import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(params: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [params.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
