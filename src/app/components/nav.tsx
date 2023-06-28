import React from "react";

export default function Nav({ children }:{children:React.ReactNode}) {
    return (
      <nav className="flex   text-sm font-medium">
        <ul className="flex items-center space-x-6 ">
          {children}
        </ul>
      </nav>
    )
  }