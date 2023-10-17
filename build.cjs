const { build } = require("esbuild");

const sharedConfig = {
	entryPoints: ["src/lib.ts"],
	bundle: true,
	minify: true,
};

build({
	...sharedConfig,
	outfile: "dist/lib.js",
	platform: "neutral"
});
