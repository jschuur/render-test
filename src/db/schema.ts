import { integer, pgTable, serial } from 'drizzle-orm/pg-core';

export const data = pgTable('data', {
  id: serial('id').primaryKey(),
  randomNumber: integer('random_number').notNull(),
});
