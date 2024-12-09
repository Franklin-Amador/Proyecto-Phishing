import { getUsuarios } from "../api/user";
import { revalidatePath } from 'next/cache';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

// Esta función se ejecutará en cada renderizado
const UsuariosPage = async () => {
  // Forzar revalidación en cada solicitud
  revalidatePath('/user');

  const users: Usuario[] = await getUsuarios();

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Usuarios</h1>
      <ul>
        {users.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosPage;