
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
    } catch (error) {
      console.error("Fallo en el registro:", error);
    }
  };
  
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left Side */}
      <div className="text-3xl w-1/2 px-10">
        <Image
          src={"/facebook.svg"}
          width={300}
          height={100}
          alt="Facebook Logo"
        />
        <p className="ml-8 -mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/4 shadow-lg border border-gray-200">
        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700"
          onClick={handleRegister}
        >
          Log in
        </button>
        {message && (
          <p className="text-center text-red-600 mt-2">{message}</p>
        )}
        <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
          Forgotten password?
        </p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
          Create new account
        </button>
      </div>
    </div>
  );
}

      