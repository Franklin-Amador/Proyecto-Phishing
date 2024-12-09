import { createClient } from "@libsql/client";

const client = createClient({
  
  url: "libsql://base-franklin-amador.turso.io",
  syncUrl: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export default client;
