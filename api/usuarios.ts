import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/bd";
// export const runtime = "edge";

export const getPersonas = async (): Promise<Persona[]> => {
  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout exceeded")), 5000)  // Timeout de 5 segundos
    );

    const dbQueryPromise = client.execute("SELECT * FROM Usuario");

    const { rows } = await Promise.race([dbQueryPromise, timeoutPromise]) as { rows: any[] };

    return rows.map(row => ({
      id: row.id,
      nombre: row.nombre,
      password: row.password,
      email: row.email
    })) as Persona[];
  } catch (error) {
    console.error("Error al obtener personas:", error);
    return [];
  }
};


  type PostPersonaResponse = { message: string };

// api/usuarios.ts

export const postPersonas = async (Persona: Persona): Promise<PostPersonaResponse> => {
    try{
    const { rows } = await client.execute(`insert into Usuario (nombre, email, password) values('${Persona.nombre}', '${Persona.email}','${Persona.password}') returning *;`);
    return {message: 'Success'};
    } catch {
        return {message: 'No se pudo insertar los datos'}
    }
}
  
  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const personas = await getPersonas();
      res.status(200).json(personas);
    } catch (error) {
      console.error("Error al obtener personas:", error);
      res.status(500).json({ error: "Error al obtener personas" });
    }
  }
