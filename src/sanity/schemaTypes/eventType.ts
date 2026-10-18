import { defineField, defineType } from 'sanity';

export const eventType = defineType({
  name: 'event',
  title: 'Community Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Day (e.g. 22)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'month',
      title: 'Month (e.g. OCT)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeLocation',
      title: 'Time & Location (e.g. 7:00 PM • The Mezzanine • Free with RSVP)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker / Host',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'timeLocation',
    },
  },
});
