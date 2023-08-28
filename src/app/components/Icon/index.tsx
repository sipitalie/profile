import {FaLinkedin,FaUserCircle} from "../react-icons/fa"
import {AiFillInstagram,AiFillYoutube}from "../react-icons/ai"
export type IconName="LinkedIn"|"Portfólio"|"Instagram"|"Youtube"
export function Icon({name,color}:{name:IconName, color:string}){
    switch (name) {
        case "LinkedIn":
            return <FaLinkedin size={32} color={color} />
        case "Instagram":
            return <AiFillInstagram size={32} color={color}/>
        case "Portfólio":
            return <FaUserCircle size={32} color={color}/>
        case "Youtube":
            return < AiFillYoutube size={32} color={color}/>
        default:
            return null;
    }
}