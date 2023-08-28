import { ReactNode } from "react";

export function  Container({children}:{children:ReactNode}){
    return (
        <div  className="lg:w-1/4 md:w-2/4 w-full items-center justify-center px-12" >
            {children}
        </div>
    )
}