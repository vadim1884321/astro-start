import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			publishDate: z.date(),
			author: reference('team').optional().default('vadim'),
			coverImage: image().optional(),
			categories: z.array(reference('category')),
			draft: z.boolean().optional().default(false),
		}),
});

const categoryCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			coverImage: image().optional(),
			category: z.string(),
		}),
});

const authorCollection = defineCollection({
	type: 'data',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string().optional(),
			headshot: image().optional(),
			role: z.string().optional(),
			mail: z.string().email().optional(),
		}),
});

export const collections = {
	blog: blogCollection,
	category: categoryCollection,
	team: authorCollection,
};
