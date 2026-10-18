import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Website Settings & Headlines',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '1. Hero Section', options: { collapsible: true, collapsed: false } },
    { name: 'valueProps', title: '2. Value Propositions Bar', options: { collapsible: true, collapsed: true } },
    { name: 'catalog', title: '3. Staff Picks Catalog Section', options: { collapsible: true, collapsed: true } },
    { name: 'botm', title: '4. Book of the Month Banner', options: { collapsible: true, collapsed: true } },
    { name: 'shelves', title: '5. Curated Shelves Section', options: { collapsible: true, collapsed: true } },
    { name: 'events', title: '6. Community & Events Section', options: { collapsible: true, collapsed: true } },
    { name: 'journal', title: '7. Journal Section', options: { collapsible: true, collapsed: true } },
    { name: 'store', title: '8. Flagship Store & Visit Info', options: { collapsible: true, collapsed: true } },
    { name: 'newsletter', title: '9. Newsletter Section', options: { collapsible: true, collapsed: true } },
    { name: 'footer', title: '10. Footer & Brand', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // 1. HERO
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Independent Bookstore • Est. 2018',
    }),
    defineField({
      name: 'heroTitlePrefix',
      title: 'Hero Title Prefix',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'For the love of',
    }),
    defineField({
      name: 'heroTitleAccent',
      title: 'Hero Title Highlighted (Italic)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'a good book.',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'hero',
      initialValue:
        'Handpicked titles, independent presses, and quiet corners for avid readers. Free shipping on orders over $45 across the country.',
    }),
    defineField({
      name: 'heroRatingText',
      title: 'Social Proof / Rating Text',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Rated 4.9/5 by over 12,000 book lovers',
    }),
    defineField({
      name: 'heroStoreCaption',
      title: 'Caption Under Hero Image',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Quiet mornings at our Northfield store',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Custom Upload)',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'hero',
    }),

    // 2. VALUE PROPS
    defineField({
      name: 'valueProp1Title',
      title: 'Value Prop 1 Title',
      type: 'string',
      fieldset: 'valueProps',
      initialValue: 'Free shipping on orders over $45',
    }),
    defineField({
      name: 'valueProp2Title',
      title: 'Value Prop 2 Title',
      type: 'string',
      fieldset: 'valueProps',
      initialValue: 'Hand-wrapped with care in recycled paper',
    }),
    defineField({
      name: 'valueProp3Title',
      title: 'Value Prop 3 Title',
      type: 'string',
      fieldset: 'valueProps',
      initialValue: 'Curated by real booksellers, not algorithms',
    }),
    defineField({
      name: 'freeShippingThreshold',
      title: 'Free Shipping Threshold ($)',
      type: 'number',
      fieldset: 'valueProps',
      initialValue: 45,
    }),

    // 3. CATALOG / STAFF PICKS
    defineField({
      name: 'catalogEyebrow',
      title: 'Catalog Section Eyebrow',
      type: 'string',
      fieldset: 'catalog',
      initialValue: 'STAFF PICKS • FALL 2024',
    }),
    defineField({
      name: 'catalogTitle',
      title: 'Catalog Section Heading',
      type: 'string',
      fieldset: 'catalog',
      initialValue: 'Worth making room for.',
    }),
    defineField({
      name: 'catalogLinkText',
      title: 'Catalog Link Text',
      type: 'string',
      fieldset: 'catalog',
      initialValue: 'Explore all staff picks',
    }),

    // 4. BOOK OF THE MONTH
    defineField({
      name: 'botmEyebrow',
      title: 'Book of the Month Eyebrow',
      type: 'string',
      fieldset: 'botm',
      initialValue: 'BOOK OF THE MONTH • OCTOBER',
    }),
    defineField({
      name: 'botmTitleLine1',
      title: 'Heading Line 1',
      type: 'string',
      fieldset: 'botm',
      initialValue: 'A little lost.',
    }),
    defineField({
      name: 'botmTitleLine2',
      title: 'Heading Line 2 (Italic)',
      type: 'string',
      fieldset: 'botm',
      initialValue: 'A little more found.',
    }),
    defineField({
      name: 'botmDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
      fieldset: 'botm',
      initialValue:
        'An exploration of wandering, being displaced, and the unexpected gifts of not knowing where you are going. Solnit draws on memoir, history, and natural science to map the contours of solitude and revelation.',
    }),
    defineField({
      name: 'botmQuote',
      title: 'Staff Review Quote',
      type: 'text',
      rows: 2,
      fieldset: 'botm',
      initialValue: '“Changed the way I walk through both cities and wilderness. Essential reading.”',
    }),
    defineField({
      name: 'botmQuoteAuthor',
      title: 'Review Quote Author',
      type: 'string',
      fieldset: 'botm',
      initialValue: '— Maya Lin, Head Buyer',
    }),
    defineField({
      name: 'botmPriceText',
      title: 'Price Display',
      type: 'string',
      fieldset: 'botm',
      initialValue: '$17.95 • Paperback',
    }),
    defineField({
      name: 'botmCtaText',
      title: 'Button CTA Text',
      type: 'string',
      fieldset: 'botm',
      initialValue: "Order This Month's Selection",
    }),
    defineField({
      name: 'botmCoverImage',
      title: 'Book Cover Image (Custom Upload)',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'botm',
    }),

    // 5. CURATED SHELVES
    defineField({
      name: 'shelvesEyebrow',
      title: 'Shelves Eyebrow',
      type: 'string',
      fieldset: 'shelves',
      initialValue: 'CURATED SHELVES',
    }),
    defineField({
      name: 'shelvesTitle',
      title: 'Shelves Heading',
      type: 'string',
      fieldset: 'shelves',
      initialValue: 'A shelf for every mood.',
    }),
    defineField({
      name: 'shelvesLinkText',
      title: 'Shelves Link Text',
      type: 'string',
      fieldset: 'shelves',
      initialValue: 'Browse all collections',
    }),

    // 6. COMMUNITY & EVENTS
    defineField({
      name: 'eventsEyebrow',
      title: 'Events Eyebrow',
      type: 'string',
      fieldset: 'events',
      initialValue: 'COMMUNITY & GATHERINGS',
    }),
    defineField({
      name: 'eventsTitle',
      title: 'Events Heading',
      type: 'string',
      fieldset: 'events',
      initialValue: 'Better, together.',
    }),
    defineField({
      name: 'eventsDescription',
      title: 'Events Description Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'events',
      initialValue:
        'Join us every Thursday evening for lively discussions, local cider, and new friends. Walk-ins are always welcome, and every reader has a seat at the table.',
    }),

    // 7. JOURNAL
    defineField({
      name: 'journalEyebrow',
      title: 'Journal Eyebrow',
      type: 'string',
      fieldset: 'journal',
      initialValue: 'FROM OUR JOURNAL',
    }),
    defineField({
      name: 'journalTitle',
      title: 'Journal Heading',
      type: 'string',
      fieldset: 'journal',
      initialValue: 'Notes from the margins.',
    }),
    defineField({
      name: 'journalLinkText',
      title: 'Journal Link Text',
      type: 'string',
      fieldset: 'journal',
      initialValue: 'Read all articles',
    }),

    // 8. STORE & VISIT
    defineField({
      name: 'storeEyebrow',
      title: 'Store Section Eyebrow',
      type: 'string',
      fieldset: 'store',
      initialValue: 'OUR NORTHFIELD FLAGSHIP',
    }),
    defineField({
      name: 'storeTitleLine1',
      title: 'Store Heading Line 1',
      type: 'string',
      fieldset: 'store',
      initialValue: 'Your next chapter',
    }),
    defineField({
      name: 'storeTitleLine2',
      title: 'Store Heading Line 2 (Italic)',
      type: 'string',
      fieldset: 'store',
      initialValue: 'starts here.',
    }),
    defineField({
      name: 'storeDescription',
      title: 'Store Description',
      type: 'text',
      rows: 3,
      fieldset: 'store',
      initialValue:
        'Three floors of floor-to-ceiling shelves, a curated stationery corner, and an espresso bar serving locally roasted beans. Pull up a chair and stay as long as you like.',
    }),
    defineField({
      name: 'storeHoursMonSat',
      title: 'Store Hours (Mon - Sat)',
      type: 'string',
      fieldset: 'store',
      initialValue: 'Mon – Sat: 9am – 8pm',
    }),
    defineField({
      name: 'storeHoursSun',
      title: 'Store Hours (Sun)',
      type: 'string',
      fieldset: 'store',
      initialValue: 'Sun: 10am – 6pm',
    }),
    defineField({
      name: 'storeAddress',
      title: 'Store Address',
      type: 'string',
      fieldset: 'store',
      initialValue: '142 Mill Street, Northfield, VT 05663',
    }),
    defineField({
      name: 'storePhone',
      title: 'Store Phone',
      type: 'string',
      fieldset: 'store',
      initialValue: '(802) 555-0194',
    }),

    // 9. NEWSLETTER
    defineField({
      name: 'newsletterEyebrow',
      title: 'Newsletter Eyebrow',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'A WEEKLY DISPATCH FROM OUR BOOKSELLERS',
    }),
    defineField({
      name: 'newsletterTitle',
      title: 'Newsletter Heading',
      type: 'string',
      fieldset: 'newsletter',
      initialValue: 'A letter worth opening.',
    }),
    defineField({
      name: 'newsletterDescription',
      title: 'Newsletter Description',
      type: 'text',
      rows: 2,
      fieldset: 'newsletter',
      initialValue:
        'Recommendations, upcoming events, and thoughtful literary dispatches delivered to your inbox every Sunday morning.',
    }),

    // 10. FOOTER
    defineField({
      name: 'footerDescription',
      title: 'Footer Bio Text',
      type: 'text',
      rows: 2,
      fieldset: 'footer',
      initialValue:
        'Your friendly neighborhood independent bookseller. Proud member of the American Booksellers Association.',
    }),
  ],
});
