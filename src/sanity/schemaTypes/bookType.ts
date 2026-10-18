import { defineField, defineType } from 'sanity';

export const bookType = defineType({
  name: 'book',
  title: 'Books',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Book Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Identifier)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fiction', value: 'Fiction' },
          { title: 'Non-Fiction', value: 'Non-Fiction' },
          { title: 'Essays & Poetry', value: 'Essays & Poetry' },
          { title: 'Art & Design', value: 'Art & Design' },
          { title: "Children's", value: "Children's" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'binding',
      title: 'Binding Format',
      type: 'string',
      options: {
        list: [
          { title: 'HARDCOVER', value: 'HARDCOVER' },
          { title: 'PAPERBACK', value: 'PAPERBACK' },
          { title: 'SPECIAL EDITION', value: 'SPECIAL EDITION' },
        ],
      },
      initialValue: 'HARDCOVER',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'badge',
      title: 'Feature Badge (e.g. Staff Favorite, Bestseller, Winter Pick)',
      type: 'string',
    }),
    defineField({
      name: 'isBookOfTheMonth',
      title: 'Feature as Book of the Month?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'rating',
      title: 'Rating (out of 5)',
      type: 'number',
      initialValue: 4.9,
    }),
    defineField({
      name: 'pages',
      title: 'Page Count',
      type: 'number',
    }),
    defineField({
      name: 'pubDate',
      title: 'Publication Date',
      type: 'string',
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Book Synopsis / Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'quote',
      title: 'Staff Review Quote',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'staffPickBy',
      title: 'Staff Reviewer Attribution (e.g. Maya Lin, Head Buyer)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'coverImage',
    },
  },
});
