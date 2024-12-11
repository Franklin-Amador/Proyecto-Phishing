
// export default PersonaCard;

import React from "react";

const PersonaCard: React.FC<PersonaCardProps> = ({ id, nombre, password, email }) => {
  return (
    <div className="persona-card border p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">{nombre || "Nombre no disponible"}</h2>
      <p>ID: {id || "ID no disponible"}</p>
      <p>Email: {email || "Email no disponible"}</p>
      <p>Contraseña: {password || "Contraseña no disponible"}</p>
    </div>
  );
};

export default PersonaCard;

