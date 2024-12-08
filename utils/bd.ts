import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://franklin-amador-franklin-amador.aws-us-east-1.turso.io",
  syncUrl:`${process.env.URL_TURSO}`,
  authToken:`${process.env.TOKEN}`,
});


export default client;
