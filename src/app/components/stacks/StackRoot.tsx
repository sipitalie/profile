import { ReactNode } from "react";

interface StackRootProps{
    children:ReactNode
}
export function StackRoot ({ children }:StackRootProps ){
    return <li className="flex flex-row justify-center">
        {children}
    </li>
}