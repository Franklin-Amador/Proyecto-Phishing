// import { redirect } from 'next/navigation';

// // export const runtime = "edge";

// export default function Home() {
//   // Realiza la redirección
//   redirect('/login');
// }

// ? testeando cosas xd

// import Image from "next/image";
// import postPersonas from "@/api/usuarios";


// export default async function Home() {


//   return (
//     <div className="bg-gray-100 h-screen flex items-center justify-center">
//       {/* Left Side */}
//       <div className="text-3xl w-1/2 px-10">
//         <Image
//           src={"/facebook.svg"}
//           width={300}
//           height={100}
//           alt="Facebook Logo"
//         />
//         <p className="ml-8 -mt-3">
//           Facebook helps you connect and share with the people in your life.
//         </p>
//       </div>
//       {/* Right Side */}
//       <div>
        
//       </div>
//       <div className="bg-white flex flex-col p-5 rounded-xl w-1/4 shadow-lg border border-gray-200">
//         <input
//           className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
//           type="text"
//           placeholder="Email address or phone number"
//         />
//         <input
//           className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
//           type="password"
//           placeholder="Password"
//         />
//         <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
//           Log in
//         </button>
//         <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
//           Forgotten password?
//         </p>
//         <span className="my-2">
//           <hr />
//         </span>
//         <button className="bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">
//           Create new account
//         </button>
//       </div>
   
//     </div>
//   );
// }



'use client';

import { useState } from "react";
import Image from "next/image";
import postPersonas from "@/api/usuarios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // const handleRegister = async () => {
  //   if (!email || !password) {
  //     setMessage("Por favor, llena ambos campos.");
  //     return;
  //   }

  //   try {
  //     const response = await postPersonas({ email, password });
  //     setMessage("gg"); // Mostrar mensaje de éxito o error
  //   } catch (error) {
  //     console.error("Error al registrar:", error);
  //     setMessage("Ocurrió un error al registrar.");
  //   }
  // };

  const handleRegister = async () => {
    try {
      const data = { email, password };
  
      const response = await fetch("@/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log(result.message);
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

      