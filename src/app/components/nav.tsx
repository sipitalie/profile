import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoH from "../../../public/es.svg"

export default function Nav({ children }:{children?:React.ReactNode}) {
    return (
      <nav className="flex fixed w-screen h-16 z-10 bg-stone-950 border-b border-stone-900   text-sm font-medium px-16 ">
        <ul className="flex flex-row sm:w-full  h-full">
          <li className="flex flex-row items-center justify-center h-full" ><Link href={"/"}>
            <div className="flex items-center content-center justify-center w-[3rem] h-[3rem] bg-stone-900 rounded-lg">
            <Image className="w-full h-full" src={logoH} alt="estevao_sipitali"/>          
          </div>
          </Link></li>
          <li className="flex flex-row items-center justify-center h-full" ><Link href={"/"}>
          <div className="flex items-center justify-center h-full mx-2.5" >
            <h1 className="text-white text-center text-[1.4rem] font-bold">Estevão Sipitali</h1>
          </div>
          </Link></li></ul>
        <ul className="hidden sm:flex items-center">
          {children}
        </ul>
      </nav>
    )
}