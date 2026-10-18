import { type SchemaTypeDefinition } from 'sanity';
import { bookType } from './bookType';
import { siteSettingsType } from './siteSettingsType';
import { eventType } from './eventType';
import { journalType } from './journalType';
import { shelfType } from './shelfType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookType, siteSettingsType, eventType, journalType, shelfType],
};
