import { defineCollection, z } from "astro:content";

const project = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: z.string(),
        techStack: z.string().array(),
        keywords: z.string().array(),
        version: z.string(),
        createdAt: z.coerce.date(),
    }),
});

const publication = defineCollection({
    type: "content",
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        description: z.string(),
        heroImage: z.string(),
        keywords: z.string().array(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
    }),
});

const click = defineCollection({
    type: "data",
    schema: z.object({
        image: z.string(),
        createdAt: z.coerce.date(),
        shotLocation: z.string(),
    }),
});

export const collections = { publication, project, click };
