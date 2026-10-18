export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  binding: 'HARDCOVER' | 'PAPERBACK' | 'SPECIAL EDITION';
  coverImage?: string;
  badge?: string;
  rating: number;
  pages: number;
  pubDate: string;
  publisher?: string;
  description: string;
  quote?: string;
  staffPickBy?: string;
}

export interface CuratedShelf {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  tag: string;
  image: string;
  href: string;
}

export interface StoreEvent {
  id: string;
  day: string;
  month: string;
  title: string;
  timeLocation: string;
  speaker?: string;
  rsvpStatus: 'Free with RSVP' | 'Free Admission' | 'Open to all' | 'Ticketed';
  description: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export const STAFF_PICKS: Book[] = [
  {
    id: 'solace-trees',
    title: 'The Solace Trees',
    author: 'Elena Rostova',
    price: 28.0,
    category: 'Fiction',
    binding: 'HARDCOVER',
    coverImage: '/images/book_solace_trees.jpg',
    badge: 'Staff Favorite',
    rating: 4.9,
    pages: 384,
    pubDate: 'September 2024',
    publisher: 'Folio Literary Press',
    description: 'A sweeping narrative exploring generations of forestry workers, forgotten alpine dialects, and an elusive love story set in the misty pine peaks of Eastern Europe.',
    quote: 'Lush, atmospheric, and impossibly tender. Rostova writes with pine needles under her fingernails.',
    staffPickBy: 'Julian (Fiction Buyer)'
  },
  {
    id: 'small-things',
    title: 'Small Things Like These',
    author: 'Claire Keegan',
    price: 16.95,
    category: 'Fiction',
    binding: 'PAPERBACK',
    coverImage: '/images/book_small_things.jpg',
    badge: 'Winter Pick',
    rating: 4.95,
    pages: 128,
    pubDate: 'November 2021',
    publisher: 'Grove Press',
    description: 'In a small Irish town in 1985 during the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces a moral reckoning during his daily deliveries.',
    quote: 'A moral miracle of a novella. Every single word feels chiseled from pure human empathy.',
    staffPickBy: 'Claire (Staff Bookseller)'
  },
  {
    id: 'devotions',
    title: 'Devotions',
    author: 'Mary Oliver',
    price: 24.0,
    category: 'Poetry',
    binding: 'HARDCOVER',
    coverImage: '/images/book_devotions.jpg',
    badge: 'Bestseller',
    rating: 5.0,
    pages: 480,
    pubDate: 'October 2017',
    publisher: 'Penguin Press',
    description: 'Pulitzer Prize-winning poet Mary Oliver presents a definitive collection of over two hundred poems from her five decades of celebrating the luminous natural world.',
    quote: 'The collection that belongs on every bedside table in the world. It is impossible to read this and not feel awe.',
    staffPickBy: 'Marcus (General Manager)'
  },
  {
    id: 'creative-act',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    price: 32.0,
    category: 'Non-Fiction',
    binding: 'HARDCOVER',
    coverImage: '/images/book_creative_act.jpg',
    badge: 'Staff Favorite',
    rating: 4.8,
    pages: 432,
    pubDate: 'January 2023',
    publisher: 'Penguin Press',
    description: 'A beautiful, meditative study of where creativity comes from and what it asks of us. Rick Rubin shows that being an artist isn’t about output, but about how you perceive the world.',
    quote: 'A timeless antidote to burnout and self-doubt. You will highlight almost every sentence.',
    staffPickBy: 'Elena (Event Coordinator)'
  }
];

export const ALL_CATALOG_BOOKS: Book[] = [
  ...STAFF_PICKS,
  {
    id: 'field-guide',
    title: 'A Field Guide to Getting Lost',
    author: 'Rebecca Solnit',
    price: 17.95,
    category: 'Non-Fiction',
    binding: 'PAPERBACK',
    coverImage: '/images/getting_lost_cover.jpg',
    badge: 'Book of the Month',
    rating: 4.9,
    pages: 224,
    pubDate: 'June 2006',
    publisher: 'Penguin Classics',
    description: 'An investigation into loss, wandering, displacement, and the necessity of unknown territory.',
    quote: 'Changed the way I walk through both cities and wilderness. Essential reading.',
    staffPickBy: 'Maya Lin, Head Buyer'
  },
  {
    id: 'quiet-hours',
    title: 'The Quiet Hours of the Mind',
    author: 'Silas Vance',
    price: 22.5,
    category: 'Essays & Poetry',
    binding: 'HARDCOVER',
    coverImage: '/images/book_quiet_hours.jpg',
    badge: 'New Release',
    rating: 4.85,
    pages: 260,
    pubDate: 'August 2024',
    publisher: 'Archipelago Press',
    description: 'Meditations on silence, solitary morning walks, and preserving attention in a noisy century.',
    quote: 'Like a deep exhalation after a long, frantic season.',
    staffPickBy: 'Julian (Staff)'
  }
];

export const CURATED_SHELVES: CuratedShelf[] = [
  {
    id: 'slowing-down',
    title: 'The Art of Slowing Down',
    subtitle: 'Reflective memoirs, slow philosophy, and quiet contemplation.',
    count: '18 TITLES',
    tag: 'COZY READS',
    image: '/images/shelf_slowing_down.jpg',
    href: '#shelves'
  },
  {
    id: 'lives-beyond',
    title: 'Lives Beyond Our Own',
    subtitle: 'Vibrant international voices and unforgettable human perspectives.',
    count: '24 TITLES',
    tag: 'CONTEMPORARY',
    image: '/images/shelf_breathless_sitting.jpg',
    href: '#shelves'
  },
  {
    id: 'small-books',
    title: 'Small Books, Big Heart',
    subtitle: 'Short novellas and pocket volumes with enduring emotional punch.',
    count: '12 TITLES',
    tag: 'POETRY & NATURE',
    image: '/images/shelf_small_books.jpg',
    href: '#shelves'
  }
];

export const UPCOMING_EVENTS: StoreEvent[] = [
  {
    id: 'event-1',
    day: '22',
    month: 'OCT',
    title: 'The Thursday Book Club: Elena Rostova',
    timeLocation: '7:00 PM • The Mezzanine • Free with RSVP',
    speaker: 'Elena Rostova in conversation with Julian Vance',
    rsvpStatus: 'Free with RSVP',
    description: 'Join us for a cozy evening discussing "The Solace Trees" with complimentary spiced hot cider and local artisan pastries.'
  },
  {
    id: 'event-2',
    day: '29',
    month: 'OCT',
    title: 'Poetry & Cider Night: Vermont Voices',
    timeLocation: '6:30 PM • Main Floor • Free Admission',
    speaker: 'Four emerging Green Mountain poets',
    rsvpStatus: 'Free Admission',
    description: 'An intimate candlelit open mic and featured reading celebrating northern autumn, forest ecology, and quiet verse.'
  },
  {
    id: 'event-3',
    day: '07',
    month: 'NOV',
    title: 'Small Press Showcase: 6 Independent Publishers',
    timeLocation: '2:00 PM • Courtyard & Café • Open to all',
    speaker: 'Editors from Graywolf, Archipelago, and New Directions',
    rsvpStatus: 'Open to all',
    description: 'Meet the fearless independent publishers shaping modern literature with book signings, limited editions, and letterpress demos.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'In defense of the dog-eared paperback',
    category: 'ESSAYS',
    readTime: '5 MIN READ',
    excerpt: 'Why pristine books are overrated, and the quiet beauty of a volume that bears the weather marks and margin scrawls of where you’ve been.',
    image: '/images/journal_slow_read.jpg',
    date: 'October 12, 2024',
    author: 'Claire Tremblay'
  },
  {
    id: 'art-2',
    title: 'What a translator really does',
    category: 'INTERVIEW',
    readTime: '8 MIN READ',
    excerpt: 'A deep conversation with award-winning translator Sarah Ardizzone on capturing the unsaid, cultural cadence, and the secrets of tone.',
    image: '/images/journal_autumn_reading.jpg',
    date: 'October 4, 2024',
    author: 'Julian Vance'
  }
];
