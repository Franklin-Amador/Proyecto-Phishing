import client from "@/utils/bd";

export const postPersonas = async (data: { email: string; password: string }) => {
    try {
      await client.execute({
        sql: "INSERT INTO Usuarios (email, password) VALUES (?, ?)",
        args: [data.email, data.password]
      });
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
  };

export default postPersonas;