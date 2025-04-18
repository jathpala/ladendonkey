import { defineCollection, z } from "astro:content"

import { glob, file } from "astro/loaders"

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        tags: z.string().array().optional(),
        published: z.date().nullable().optional()
    })
})

export const collections = { blog: blog }
