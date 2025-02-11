import { defineConfig } from 'astro/config';
import { SiteMetadata } from './src/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: SiteMetadata.website,
	trailingSlash: 'never',
	prefetch: true,
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		mdx(),
		sitemap(),
		(await import('@playform/inline')).default({}),
		(await import('@playform/compress')).default({
			Image: false,
			SVG: false,
		}),
	],
});
