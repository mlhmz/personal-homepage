import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  schema: z.object({
    index: z.number().min(1),
    name: z.string(),
    technologies: z.string().array().optional(),
    gitHubLink: z.string().url().optional(),
    shortDescription: z.string(),
    imageSlide: z.string().array().optional(),
  }),
});

export const collections = {
  portfolio,
};
