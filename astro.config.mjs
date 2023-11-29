import { defineConfig } from 'astro/config';
import { SiteMetadata } from './src/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import critters from 'astro-critters';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
	site: SiteMetadata.website,
	prefetch: true,
	integrations: [mdx(), tailwind(), sitemap(), critters(), compress({ Image: false, SVG: false })],
	vite: {
		plugins: [],
	},
});
