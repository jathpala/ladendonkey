import { defineCollection, z } from "astro:content"

import { glob, file } from "astro/loaders"

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        tags: z.string().array().optional(),
        created: z.date().nullable().optional(),
        updated: z.date().nullable().optional()
    })
})

export const collections = { blog: blog }
