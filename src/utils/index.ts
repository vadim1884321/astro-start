import type { CollectionEntry } from 'astro:content';

export function formatDate(datetime: Date) {
	return new Date(datetime)
		.toLocaleDateString('ru-RU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC',
		})
		.replace(/\s*г\./, '');
}

export const formatBlogPosts = (posts: CollectionEntry<'blog'>[]) =>
	posts
		.filter(({ data }) => (import.meta.env.PROD ? data.draft !== true : true))
		.sort(
			(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
		);
