import Projects from "../components";
import Nav from "../components/nav";
import NavItem from "../components/navItem";
import FooterLinksNav from "../components/naviFooterLinks";
const revaledate= 3600*18
async function fetchProjects(){
    const base_url='https://api.github.com/users/sipitalie/repos'
    const res = await fetch(base_url,{ next: { revalidate: revaledate } });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default async function ProjectsPage(){
   const data =await fetchProjects()
   const repos=data?.map((repo:any)=>{
    return {
        id:repo.id,
        name:repo.name,
        link:repo.html_url,
        description:repo.description,
        language: repo?.language,
        created_at:repo.created_at,
        fork: repo.fork,
        stars:repo.stargazers_count,
        starRating:3,
        year:new Date(repo.created_at).getFullYear(),
    }
   })
   
    return(
        <>
         <Nav>
        <NavItem href={'/posts'} isActive><span className={`text-white text-lg font-bold`}>Postagens</span></NavItem>
        <NavItem href={'/projects'} isActive><span className={`text-white text-lg font-bold`}>Projectos</span></NavItem>
        </Nav>
        <div className="flex flex-col items-center justify-between p-24 bg-zinc-950">
        <Projects repos={repos}/>
    </div>
    <FooterLinksNav/>
    </>
    )

}