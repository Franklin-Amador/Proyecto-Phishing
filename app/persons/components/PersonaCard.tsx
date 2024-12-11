
// export default PersonaCard;

import React from "react";

const PersonaCard: React.FC<PersonaCardProps> = ({ id, password, email, date }) => {
  return (
    <div className="persona-card border p-4 rounded shadow-md">
      <p>ID: {id || "ID no disponible"}</p>
      <p>Email: {email || "Email no disponible"}</p>
      <p>Contraseña: {password || "Contraseña no disponible"}</p>
      <p>Fecha acceso: {date || "No disponible"}</p>
    </div>
  );
};

export default PersonaCard;

