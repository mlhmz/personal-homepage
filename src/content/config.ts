import { defineCollection, z } from "astro:content";

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
  portfolio,
};
