import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/bd";
// export const runtime = "edge";

export const getPersonas = async (): Promise<any[]> => {
  const { rows } = await client.execute("SELECT id, nombre, email FROM Usuario");
  return rows;
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
