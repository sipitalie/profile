
import Link from "next/link";
import React from "react";
import { Icon, IconName } from "../Icon";


const links=[
    {
        name:"Instagram",
        link:"https://instagram.com/estevao_nilton?igshid=MmIzYWVlNDQ5Yg=="
    },
    {
        name:"Youtube",
        link:"https://www.youtube.com/@estevaosipitali"
    },
    {
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/sipitalie"
    }
]
export default function FooterLinksNav() {
    return (
      <nav className="flex fixed w-screen bottom-0 h-14 z-10 font-medium px-16 ">
        <ul className="flex flex-row items-center justify-end sm:w-full  h-full">
          {
                    links.map((item,key)=> {
                        return(
                            <li key={key} className="flex px-4 " >
                            <Link  href={item.link}>
                                    <span>
                                    <Icon name={item.name as IconName} color={"rgb(185 28 28)"}/>
                                    </span>
                            </Link>
                            </li>)
                        })
                }
          </ul>
        
      </nav>
    )
}