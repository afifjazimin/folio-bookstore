import { client } from './client';
import { urlForImage } from './image';
import {
  ALL_CATALOG_BOOKS,
  Book,
  StoreEvent,
  UPCOMING_EVENTS,
  JournalArticle,
  JOURNAL_ARTICLES,
  CuratedShelf,
  CURATED_SHELVES,
} from '@/data/bookstore';

export interface SiteSettings {
  // Hero
  heroEyebrow?: string;
  heroTitlePrefix?: string;
  heroTitleAccent?: string;
  heroDescription?: string;
  heroRatingText?: string;
  heroStoreCaption?: string;
  heroImage?: any;

  // Value Props
  valueProp1Title?: string;
  valueProp2Title?: string;
  valueProp3Title?: string;
  freeShippingThreshold?: number;

  // Catalog
  catalogEyebrow?: string;
  catalogTitle?: string;
  catalogLinkText?: string;

  // Book of the Month
  botmEyebrow?: string;
  botmTitleLine1?: string;
  botmTitleLine2?: string;
  botmDescription?: string;
  botmQuote?: string;
  botmQuoteAuthor?: string;
  botmPriceText?: string;
  botmCtaText?: string;
  botmCoverImage?: any;

  // Shelves
  shelvesEyebrow?: string;
  shelvesTitle?: string;
  shelvesLinkText?: string;

  // Events
  eventsEyebrow?: string;
  eventsTitle?: string;
  eventsDescription?: string;

  // Journal
  journalEyebrow?: string;
  journalTitle?: string;
  journalLinkText?: string;

  // Store & Visit
  storeEyebrow?: string;
  storeTitleLine1?: string;
  storeTitleLine2?: string;
  storeDescription?: string;
  storeHoursMonSat?: string;
  storeHoursSun?: string;
  storeAddress?: string;
  storePhone?: string;

  // Newsletter
  newsletterEyebrow?: string;
  newsletterTitle?: string;
  newsletterDescription?: string;

  // Footer
  footerDescription?: string;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch<SiteSettings>(
      `*[_type == "siteSettings"][0]`
    );
    return settings || {};
  } catch (error) {
    console.warn('Sanity siteSettings error, using defaults:', error);
    return {};
  }
}

export async function getBooks(): Promise<Book[]> {
  try {
    const sanityBooks = await client.fetch<any[]>(
      `*[_type == "book"] | order(_createdAt desc)`
    );

    if (!sanityBooks || sanityBooks.length === 0) {
      return ALL_CATALOG_BOOKS;
    }

    const mapped = sanityBooks.map((b) => ({
      id: b._id,
      title: b.title,
      author: b.author,
      price: b.price || 0,
      category: b.category || 'Fiction',
      binding: b.binding || 'HARDCOVER',
      coverImage: b.coverImage ? urlForImage(b.coverImage).url() : undefined,
      badge: b.badge,
      rating: b.rating || 5.0,
      pages: b.pages || 300,
      pubDate: b.pubDate || '2024',
      publisher: b.publisher,
      description: b.description || '',
      quote: b.quote,
      staffPickBy: b.staffPickBy,
    }));

    // If fewer than 4 books in Sanity, supplement with default catalog items
    const defaultFallbacks = ALL_CATALOG_BOOKS.filter(
      (def) => !mapped.some((s) => s.title.toLowerCase().includes(def.title.toLowerCase()))
    );
    return [...mapped, ...defaultFallbacks];
  } catch (error) {
    console.warn('Sanity fetch returned error or empty, using default catalog:', error);
    return ALL_CATALOG_BOOKS;
  }
}

export async function getShelves(): Promise<CuratedShelf[]> {
  try {
    const sanityShelves = await client.fetch<any[]>(
      `*[_type == "shelf"] | order(_createdAt asc)`
    );

    if (!sanityShelves || sanityShelves.length === 0) {
      return CURATED_SHELVES;
    }

    return sanityShelves.map((s) => ({
      id: s._id,
      title: s.title,
      subtitle: s.subtitle || '',
      count: s.count || '12 TITLES',
      tag: s.tag || 'CURATED',
      image: s.image ? urlForImage(s.image).url() : '/images/shelf_slowing_down.jpg',
      href: '#shelves',
    }));
  } catch {
    return CURATED_SHELVES;
  }
}

export async function getEvents(): Promise<StoreEvent[]> {
  try {
    const sanityEvents = await client.fetch<any[]>(
      `*[_type == "event"] | order(_createdAt desc)`
    );

    if (!sanityEvents || sanityEvents.length === 0) {
      return UPCOMING_EVENTS;
    }

    return sanityEvents.map((e) => ({
      id: e._id,
      day: e.day,
      month: e.month,
      title: e.title,
      timeLocation: e.timeLocation,
      speaker: e.speaker,
      rsvpStatus: 'Free with RSVP',
      description: e.description || '',
    }));
  } catch {
    return UPCOMING_EVENTS;
  }
}

export async function getJournalArticles(): Promise<JournalArticle[]> {
  try {
    const sanityArticles = await client.fetch<any[]>(
      `*[_type == "journal"] | order(_createdAt desc)`
    );

    if (!sanityArticles || sanityArticles.length === 0) {
      return JOURNAL_ARTICLES;
    }

    return sanityArticles.map((a) => ({
      id: a._id,
      title: a.title,
      category: a.category,
      readTime: a.readTime || '5 MIN READ',
      excerpt: a.excerpt || '',
      image: a.image ? urlForImage(a.image).url() : '/images/journal_slow_read.jpg',
      date: 'Recent',
      author: a.author || 'Folio Staff',
    }));
  } catch {
    return JOURNAL_ARTICLES;
  }
}
