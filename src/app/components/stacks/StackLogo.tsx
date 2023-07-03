import Image from "next/image"
import { ElementType } from "react"

interface StackLogoProps{
    image_link:string
}

export function StackLogo({image_link}:StackLogoProps){
    return <Image unoptimized  src={image_link} alt="LOGO_SCTACK" height={64} width={64}/>
}