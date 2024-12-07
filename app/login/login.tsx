'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function AmazonLogin() {
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-4">
      <Image
        src="/amazon.svg"
        alt="Amazon logo"
        width={103}
        height={60}
        className="mb-4"
      />
      <div className="w-full max-w-[350px] border border-gray-300 rounded-lg p-6">
        <h1 className="text-3xl font-normal mb-4">Iniciar sesión</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">
                E-mail o celular
            </Label>
            <Input type="text" id="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">
              Contraseña
            </Label>
            <Input type="password" id="password" />
          </div>
          <Button className="w-full bg-[#ffd814] hover:bg-[#e8b835] text-black border border-[#a88734] hover:border-[#9c7e31]">
            Continuar
          </Button>
          <p className="text-xs">
            Al continuar, aceptas las <Link href="#" className="text-blue-600 underline hover:text-orange-400">Condiciones de uso</Link> y el <Link href="#" className="text-blue-600 underline hover:text-orange-400">Aviso de privacidad</Link> de Amazon.
          </p>
        </form>
        <div className="mt-4 space-y-2">
          <Collapsible open={isHelpOpen} onOpenChange={setIsHelpOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="link" className="p-0 h-auto font-normal text-xs text-black hover:no-underline hover:text-black flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-1 w-1 transition-transform text-black ${isHelpOpen ? 'transform rotate-90' : ''}`}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className='text-blue-600 hover:underline'>¿Necesitas ayuda?</p>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 ml-6">
              <ul className="text-xs space-y-1">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">¿Olvidaste tu contraseña?</Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">Otros problemas con el inicio de sesión</Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-xs mb-1">
            <p className="font-medium text-sm">¿Compras para el trabajo?</p>
          </p>
          <p className="text-sm">
            <Link href="#" className="text-blue-600 hover:underline font-medium">Compra en Amazon Business</Link>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[350px] mt-4 text-center">
        <div className="relative">
          <hr className="my-4" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-xs">
          ¿Eres nuevo en Amazon?
          </span>
        </div>
        <Button variant="outline" className="w-full mt-4 shadow-md">
          Crea tu cuenta de Amazon
        </Button>
      </div>
      <footer className="mt-8 text-xs text-center space-y-2">
        <div className="space-x-4">
          <Link href="#" className="text-blue-600 hover:underline">Condiciones de uso</Link>
          <Link href="#" className="text-blue-600 hover:underline"> Aviso de privacidad</Link>
          <Link href="#" className="text-blue-600 hover:underline">Ayuda</Link>
        </div>
        <div className="text-gray-600">© 1996-2024 Amazon.com, Inc. o sus afiliados</div>
      </footer>
    </div>
  )
}

