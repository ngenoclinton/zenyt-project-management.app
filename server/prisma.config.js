// // prisma.config.js  (place it in your project root)
// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/schema.prisma",          // adjust if your schema is elsewhere
//   migrations: {
//     path: "prisma/migrations",
//   },
//   datasource: {
//     url: env("DATABASE_URL"),              // this is for Prisma Migrate/CLI
//   },
// });
import 'dotenv/config';             // ✅ REQUIRED
import { defineConfig } from "prisma/config";
// import { PrismaNeon } from "@prisma/adapter-neon";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    provider: "postgresql",
    url: process.env.DATABASE_URL,
  },

  migrations: {
    path: "prisma/migrations",
  },

  // client: {
  //   adapter: new PrismaNeon(process.env.DATABASE_URL),
  // },
});
