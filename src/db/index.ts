import 'dotenv/config';

import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) throw 'DATABASE_URL is not set';

const migrationClient = postgres(databaseUrl, { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: 'drizzle' });

const queryClient = postgres(databaseUrl);
export const db = drizzle(queryClient);
