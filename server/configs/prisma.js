// config/prisma.js  (or wherever you keep it)
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Required for Edge runtimes (Vercel, Cloudflare, etc.)
neonConfig.webSocketConstructor = ws;

// Optional but recommended in production
// neonConfig.poolQueryViaFetch = true;  // uncomment if you hit connection limits

// const connectionString = process.env.DATABASE_URL;
const connectionString = process.env.DIRECT_URL;

const adapter = new PrismaNeon(connectionString);
const prisma = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;