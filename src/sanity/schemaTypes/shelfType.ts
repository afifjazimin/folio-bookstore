import { defineField, defineType } from 'sanity';

export const shelfType = defineType({
  name: 'shelf',
  title: 'Curated Shelves',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Shelf Title (e.g. The Art of Slowing Down)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Theme Tag (e.g. COZY READS)',
      type: 'string',
    }),
    defineField({
      name: 'count',
      title: 'Titles Count (e.g. 18 TITLES)',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Shelf Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'image',
    },
  },
});
