/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const mfConf = {
      // mergeRuntime: true,
      name: "shell",
      library: {
        type: config.output.libraryTarget,
        name: "shell",
      },
      filename: "static/runtime/app1RemoteEntry.js",
      remotes: {
        app1: "app1"
      },
      exposes: {
      },
    };
    config.cache = false;
    config.plugins.push(new NextFederationPlugin(mfConf))

    return config;
  }
}

module.exports = nextConfig
