import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './shared/schema.ts', // Path to your schema file(s)
  out: './drizzle',          // Output directory for migrations
  dialect: 'postgresql',     // Specify your database dialect
  dbCredentials: {
    connectionString: 'postgresql://postgres:Roxanne123@db.yorkiuccnxoyyzrliung.supabase.co:5432/postgres',
  },
});


