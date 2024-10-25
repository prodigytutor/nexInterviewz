import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgres://default:tMldTC2PZsn6@ep-divine-snow-a4fhmkwc.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
});