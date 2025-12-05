// prisma.config.js  (place it in your project root)
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",          // adjust if your schema is elsewhere
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),              // this is for Prisma Migrate/CLI
  },
});