// "use client";

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

// app/persons/page.tsx

// ! xdddddddddddd

// "use client";

// import { getPersonas } from "@//api/usuarios";
// import PersonaCard from "./components/PersonaCard";

// export default async function PersonasPage() {
//   try {
//     const personas: Persona[] = await getPersonas();
//     console.log("Personas:", personas);

//     return (
//       <div>
//         <h1>Lista de Personas</h1>
//         {personas.length > 0 ? (
//           personas.map((persona) => (
//             <PersonaCard key={persona.id} {...persona} />
//           ))
//         ) : (
//           <p>No hay personas disponibles.</p>
//         )}
//       </div>
//     );
//   } catch (error) {
//     console.error("Error al obtener personas:", error);
//     return <p>Error al cargar la lista de personas.</p>;
//   }
// }


"use client";

import { getPersonas } from "@//api/usuarios";
import PersonaCard from "./components/PersonaCard";

export default async function PersonasPage() {
  try {
    const personas = await getPersonas();

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
  } catch (error) {
    console.error('Error:', error);
    return <p>Error al obtener la lista de personas</p>;
  }
}
