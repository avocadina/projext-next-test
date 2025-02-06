import type { NextConfig } from "next";
const path = require("path");
const nextConfig: NextConfig = {
  reactStrictMode: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "src")],
		prependData: `
        @import "app/styles/global/colors.scss";
        @import "app/styles/global/sizes.scss";
        @import "app/styles/global/mixins.scss";
        `,
	},

	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	output: "standalone",
};

export default nextConfig;
