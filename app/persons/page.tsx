

// import { getPersonas } from "@//api/usuarios"; // Reutilizamos la función
// import PersonaCard from "./components/PersonaCard";

// // export const runtime = "edge";

// export default async function PersonasPage() {
//     let personas: Persona[] = [];

//   try {
//     personas = await getPersonas();
//     console.log("Personas:", personas);
//   } catch (error) {
//     console.error("Error al obtener personas:", error);
//   }

//   return (
//     <div>
//       <h1>Lista de Personas</h1>
//       {personas.length > 0 ? (
//         personas.map((persona) => (
//           <PersonaCard key={persona.id} {...persona} />
//         ))
//       ) : (
//         <p>No hay personas disponibles.</p>
        
//       )}
//     </div>
//   );
// }

import { getPersonas } from "@/utils/bd";

export default async function PersonasPage() {
  const personas = await getPersonas();

  return (
    <div>
      <h1>Lista de Personas</h1>
      {personas.length > 0 ? (
        personas.map((persona) => (
          <div key={persona.id}>
            <p>Nombre: {persona.nombre}</p>
            <p>Email: {persona.email}</p>
          </div>
        ))
      ) : (
        <p>No hay personas disponibles.</p>
      )}
    </div>
  );
}
