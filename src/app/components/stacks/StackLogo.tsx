import Image from "next/image"
import ExpoLog from "../../../assets/logo-wordmark.svg"

interface StackLogoProps{
    image_link:string,
    name:string
}

export function StackLogo({image_link, name}:StackLogoProps){
    const url=name==="Expo"?ExpoLog:image_link
    const bg=name==="Expo"||name==="Nextjs"?"bg-stone-700":"bg-stone-900"

   

    return(<div className={`flex items-center content-center justify-center w-[5rem] h-[5rem] rounded-lg ${bg}`}>
            <Image  src={url} width={58} height={52} alt="logo_stack"/>          
        </div>)
}