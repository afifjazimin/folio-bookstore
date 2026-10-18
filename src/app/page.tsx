import {
  getBooks,
  getEvents,
  getJournalArticles,
  getShelves,
  getSiteSettings,
} from '@/sanity/lib/queries';
import HomeClient from './HomeClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const [books, events, articles, shelves, settings] = await Promise.all([
    getBooks(),
    getEvents(),
    getJournalArticles(),
    getShelves(),
    getSiteSettings(),
  ]);

  return (
    <HomeClient
      initialBooks={books}
      initialEvents={events}
      initialArticles={articles}
      initialShelves={shelves}
      settings={settings}
    />
  );
}
