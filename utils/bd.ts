import { createClient } from "@libsql/client";

const client = createClient({
  
  url: "libsql://base-franklin-amador.turso.io",
  syncUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
  authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN,
});

export default client;
