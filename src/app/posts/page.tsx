import Projects from "../components";
import Movies from "../components";
import Nav from "../components/nav";
import NavItem from "../components/navItem";
import FooterLinksNav from "../components/naviFooterLinks";


export default async function PostsPage(){
    
       
  

    return(
        <>
         <Nav>
        <NavItem href={'/posts'} isActive><span className={`text-white text-lg font-bold`}>Postagens</span></NavItem>
        <NavItem href={'/projects'} isActive><span className={`text-white text-lg font-bold`}>Projectos</span></NavItem>
        </Nav>
        
       
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2  className="text-white">Posts</h2>
        </div>
        <FooterLinksNav/>
        </>
    )

}

 