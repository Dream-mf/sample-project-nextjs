const path = require('path');
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federationConfig = {
	name: "host",
	filename: "static/chunks/remote.js",
	remotes: [],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		externalDir: true
	},
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(new NextFederationPlugin(federationConfig));
		}
		return config;
	},
};

module.exports = nextConfig;
