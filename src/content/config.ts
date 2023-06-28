import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const portfolio = defineCollection({
	schema: z.object({
		index: z.number().min(1),
		name: z.string(),
		technologies: z.string().array().optional(),
		gitHubLink: z.string().url().optional(),
		shortDescription: z.string(),
	}),
});

export const collections = { 
	blog, 
	portfolio };
