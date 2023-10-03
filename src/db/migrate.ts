import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL;

async () => {
  if (!databaseUrl) throw 'DATABASE_URL is not set';

  console.log('Migrating database...');

  const migrationClient = postgres(databaseUrl, { max: 1 });
  await migrate(drizzle(migrationClient), { migrationsFolder: 'drizzle' });

  console.log('Done');
};
