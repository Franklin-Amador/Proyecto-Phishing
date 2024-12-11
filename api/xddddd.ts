import client from "@/utils/bd";

export const postPersonas = async (data: { email: string; password: string }) => {
    try {
        // Obtener la fecha actual y ajustar UTC+6
    const currentDate = new Date(Date.now() + 6 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

      await client.execute({
        sql: "INSERT INTO Usuarios (email, password, date) VALUES (?, ?, ?)",
        args: [data.email, data.password, currentDate]
      });
    } catch (error) {
      console.error('Error al insertar el usuario:', error);
    }
  };

export default postPersonas;