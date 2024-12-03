import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image()
        .refine((img) => img.width >= 960, {
          message: "Cover image must be at least 1080 pixels wide!",
        })
        .optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { blog };
