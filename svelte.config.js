import node from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node({ env: { port: process|.env.PORT } }),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ]
};

export default config;
