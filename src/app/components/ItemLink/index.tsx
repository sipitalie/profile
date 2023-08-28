import { ReactNode } from "react";

export function ItemLink({children}:{children:ReactNode} ){
    return (
        <article className="flex items-center justify-between space-x-8 p-6 px-14 mt-5 border-solid border rounded-lg border-stone-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20">
            {children}
        </article>
    )
}