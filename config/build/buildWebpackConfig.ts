import { type BuildOptions } from './types/config';
import type webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig (
  params: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = params;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(params)
    },
    resolve: buildResolvers(params),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(params),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(params) : undefined
  };
}
