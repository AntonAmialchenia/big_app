import { type BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (params: BuildOptions): DevServerConfiguration {
  return {
    port: params.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
