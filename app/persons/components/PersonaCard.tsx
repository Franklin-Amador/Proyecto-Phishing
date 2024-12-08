"use client";

import React from "react";

const PersonaCard: React.FC<PersonaCardProps> = ({ id, nombre, password, email }) => {
  return (
    <div className="PersonaCard">
      <h2>{nombre}</h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Nombre: {nombre}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default PersonaCard;
