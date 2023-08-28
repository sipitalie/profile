import Image from "next/image"
import sipitaliLogo from "../../../../public/Logo.png"
export function ImageProfile(){
    return (
        <div className="flex w-full h-52 items-center justify-center">
            <div className="flex w-52 h-52 items-center bg-white justify-center bg-stone-950 rounded-[50%] border border-red-700">
                <Image className="flex w-36 h-36 rounded-lg" src={sipitaliLogo} alt="sipitaliLogo"/>
            </div>
        </div>
    )
}