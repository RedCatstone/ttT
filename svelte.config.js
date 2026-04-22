import adapter from '@sveltejs/adapter-static'; // Change this line
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Essential for SvelteKit routing
			precompress: false,
			strict: true
		}),
		paths: {
			// REPLACE 'your-repo-name' with your actual github repo name!
			// If your repo is "tictactoe", this should be "/tictactoe"
			base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
		}
	}
};

export default config;