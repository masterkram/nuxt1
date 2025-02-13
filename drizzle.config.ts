import { join } from 'pathe'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: 'server/database/migrations',
  schema: 'server/database/schema.ts',
  driver: 'better-sqlite',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_DB_TOKEN!,
  },
})
