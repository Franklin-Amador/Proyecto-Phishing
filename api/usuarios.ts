import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/utils/bd";


export const getPersonas = async (): Promise<any[]> => {
  const { rows } = await client.execute("SELECT id,  email, password, date FROM Usuarios");
  return rows;
};

  type PostPersonaResponse = { message: string };

// api/usuarios.ts

// Función para insertar datos en la base de datos
export const postPersonas = async (data: { email: string; password: string }): Promise<PostPersonaResponse> => {
  try {
    const result = await client.execute({
      sql: "INSERT INTO Usuario (email, password) VALUES (?, ?) RETURNING *;",
      args: [data.email, data.password],
    });
    return { message: "Success" };
  } catch (error) {
    console.error("Database insert error:", error);
    return { message: "No se pudo insertar los datos" };
  }
};


export const insertStaticPersona = async (): Promise<PostPersonaResponse> => {
  try {
    const result = await client.execute(
    "insert into Usuario (nombre, email, password) values('Julio', 'julio@domain.com', 'seguridad2024');"
    );
    return { message: 'Success' };
  } catch (error) {
    console.error('Database insert error:', error);
    return { message: 'No se pudo insertar los datos xd' };
  }
};




  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const personas = await getPersonas();
      res.status(200).json(personas);
    } catch (error) {
      console.error("Error al obtener personas:", error);
      res.status(500).json({ error: "Error al obtener personas" });
    }
  }


