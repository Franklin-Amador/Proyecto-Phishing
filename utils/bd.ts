import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://franklin-amador-franklin-amador.aws-us-east-1.turso.io",
  syncUrl: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});


export default client;
