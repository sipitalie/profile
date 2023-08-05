import { ReactNode } from "react";

interface StackRootProps{
    children:ReactNode
}
export function StackRoot ({ children }:StackRootProps ){
    return <li className="flex w-[14rem] h-[6rem]   justify-center">
        <div className="flex w-full h-full items-center mx-2.5 p-2 rounded-xl  justify-between border-2 border-stone-900">
        {children}
        </div>
    </li>
}