import Link from "next/link"
import { Container } from "../components/Container"
import { ImageProfile } from "../components/ImageProfile"
import { ItemLink} from "../components/ItemLink"
import { Icon, IconName } from "../components/Icon"
import { FooterLinks } from "../components/footerLinks"

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
        name:"Portfólio",
        link:"https://www.sipitaie.com/"
    },
    {
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/sipitalie"
    }
]



export default async function Links(){
    return(
        <div className="flex flex-col h-screen w-full items-center justify-center pt-12"  >
            <Container>
            <ImageProfile/>
                {
                    links.map((item,key)=> {
                        return(
                            <Link key={key} href={item.link}>
                                <ItemLink>
                                    <span>
                                    <Icon name={item.name as IconName} color={"rgb(185 28 28)"}/>
                                    </span>
                                    <span className="text-white">
                                        {item.name}
                                    </span>
                                </ItemLink>
                            </Link>)
                        })
                }
            </Container>
            <FooterLinks/> 
    </div>
    )

}