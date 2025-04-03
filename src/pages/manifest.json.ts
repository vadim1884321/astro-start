import { SiteMetadata } from '~/config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const manifest = {
		name: SiteMetadata.title,
		description: SiteMetadata.description,
		dir: 'auto',
		lang: SiteMetadata.language,
		display: 'browser',
		orientation: 'natural',
		start_url: import.meta.env.BASE_URL,
		background_color: '#ffffff',
		theme_color: '#ffffff',
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any maskable',
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable',
			},
		],
	};

	return new Response(JSON.stringify(manifest), {
		headers: { 'Content-Type': 'application/json' },
	});
};
