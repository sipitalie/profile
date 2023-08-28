import Image from "next/image"
import sipitaliLogo from "../../../assets/sipitali.JPG"
export function ImageProfile(){
    return (
        <div className="flex w-full h-52 items-center justify-center">
            <div className="flex w-52 h-52 items-center justify-items-center bg-stone-950 rounded-[50%] border border-red-700">
                <img className="flex w-full h-full rounded-[50%]" src={sipitaliLogo} alt="sipitaliLogo"/>
            </div>
        </div>
    )
}