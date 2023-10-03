import { sql } from 'drizzle-orm';

import { db } from './index';
import { data } from './schema';

export const getDataCount = async () => {
  const result = await db.select({ count: sql<number>`count(*)` }).from(data);

  return result[0].count;
};

export const addRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000);

  return db.insert(data).values({ randomNumber });
};
