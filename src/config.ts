import type { CollectionEntry } from 'astro:content';

export type Frontmatter = CollectionEntry<'blog'>['data'];

export const SiteMetadata = {
	title: 'Astro - Новости из мира IT',
	logo_name: 'Astro',
	description:
		'Новости электроники, технологий, современных гаджетов, и другая актуальная информация современной IT индустрии',
	author: {
		name: 'Chris Tham',
		twitter: '@chris1tham',
		url: 'https://christham.net',
		email: 'chris@christham.net',
		summary: 'Outrageous actualiser.',
	},
	ogImage: '../assets/images/astro.png',
	org: {
		name: 'Hello Tham',
		twitter: '@hellothamcom',
		url: 'https://hellotham.com',
		email: 'info@hellotham.com',
		summary:
			'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
	},
	language: 'ru',
	locale: 'ru-RU',
	location: 'Rivendell, Middle Earth',
	latlng: [-33.86785, 151.20732] as [number, number],
	repository: 'https://github.com/hellotham/hello-astro',
	buildTime: new Date(),
	copyright: 'Копирование контента и размещение на других сайтах запрещено.',
};

export const NavigationLinks = [
	{ name: 'Новости IT', href: 'blog/news-it' },
	{ name: 'Электроника', href: 'blog/electronics' },
	{ name: 'Лайфхаки', href: 'blog/lifehacks' },
	{ name: 'Обзоры', href: 'blog/reviews' },
	{ name: 'DIY', href: 'blog/diy' },
	{ name: 'О нас', href: 'about' },
];

export const PAGE_SIZE = 1;
