

import { getPersonas } from "@//api/usuarios"; // Reutilizamos la función
import PersonaCard from "./components/PersonaCard";

export default async function PersonasPage() {
    let personas: Persona[] = [];

  try {
    personas = await getPersonas();

  } catch (error) {
    console.error("Error al obtener personas:", error);
  }

  return (
    <div>
      <h1>Lista de Personas</h1>
      {personas.length > 0 ? (
        personas.map((persona) => (
          <PersonaCard key={persona.id} {...persona} />
        ))
      ) : (
        <p>No hay personas disponibles.</p>
      )}
    </div>
  );
}