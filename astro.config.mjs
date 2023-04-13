import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com/',
	markdown: {
		drafts: true,
	},
	integrations: [
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		mdx(),
		tailwind(),
	],
	vite: {
		ssr: {
			external: ['svgo'],
		},
		plugins: [],
	},
});
