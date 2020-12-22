const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const isProd = process.env.NODE_ENV === "production"

module.exports = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins(new TsconfigPathsPlugin())
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }

    return config
  },
  assetPrefix: isProd ? "https://cdn.statically.io/gh/Joe1220/jsh-resume/" : "",
  target: "serverless"
}
