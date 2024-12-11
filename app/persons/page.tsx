
// ! xdddddddddddd
"use client";

import { useEffect, useState } from "react";
import { getPersonas } from "@//api/usuarios";
import PersonaCard from "./components/PersonaCard";

export default function PersonasPage() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const data = await getPersonas();
        setPersonas(data);
        setError(null); // Reinicia cualquier error previo
      } catch (err) {
        console.error("Error al obtener personas:", err);
        setError("Error al cargar la lista de personas.");
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    fetchPersonas();
  }, []); // Ejecuta solo una vez al montar el componente

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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

