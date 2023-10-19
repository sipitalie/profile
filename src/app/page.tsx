
import Link from "next/link"
import dataStaticJson from "./list.json"
import { Stack } from "./components/stacks"
import Nav from "./components/nav"
import NavItem from "./components/navItem"
import FooterLinksNav from "./components/naviFooterLinks"
export default function Home() {
  const data =dataStaticJson
  
  return (
    <>
    <Nav>
        <NavItem href={'/posts'} isActive><span className={`text-white text-lg font-bold`}>Postagens</span></NavItem>
        <NavItem href={'/projects'} isActive><span className={`text-white text-lg font-bold`}>Projectos</span></NavItem>
        {
        //<NavItem href={'/projects'} isActive><span className={`text-white text-lg font-bold`}>Projectos</span></NavItem>
        }
    </Nav>
    <div className="flex flex-col w-screen items-center justify-between pt-12 md:pt-24 ">
      <nav className="flex sm:hidden items-center">
        <ul className="flex flex-row py-5 items-center" >
          <li className="flex items-start space-x-8 p-2 mt-2 mx-2 border rounded-xl border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20">
            <Link href={'/posts'}>
            <span className={`text-white text-lg font-bold`}>Postagens</span>
            </Link>

            </li>
          <li className="flex items-start space-x-8 p-2 mt-2 mx-2 border rounded-xl border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20">
            <Link href={'/projects'}>
              <span className={`text-white text-lg font-bold`}>Projectos</span>
              </Link>
            </li>
        </ul>
      </nav>
      <section className="flex flex-col w-full h-full items-center py-4">
        <div className="flex h-46    md:w-5/6 lg:w-4/5 sm:px-[2rem]  md:px-[3rem]  items-center py-4 px-14">
          <p  className="text-white  text-[1.2rem]">
            Oi, eu sou o <strong className="text-red-700">Estevão.</strong> {data.about_me.resume_pt}
          </p>
          </div>
      </section>
      <section className="flex flex-col items-center justify-between">
          <div className="flex">
            <h1 className="text-white text-center text-[1rem] font-bold">Linguagens de programação</h1>
          </div>
          <ul className={`grid  gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4  items-center sm:px-[2rem]  md:px-0 py-12`}>
          {
            data.about_me.main_technologies.programe_language.map((pgLanguage)=>{
             
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo name={pgLanguage.name} image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }</ul>
        </section>
        <section className="flex flex-col w-full items-center justify-between py-4">
        <div className="flex">
            <h1 className="text-white text-center text-[1rem] font-bold">Bibliotecas e frameworks</h1>
          </div>
        <ul className={`grid  gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4  items-center sm:px-[2rem]  md:px-0 py-12`}> 
       {
            data.about_me.main_technologies.libs_and_framworks.map((pgLanguage)=>{
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo name={pgLanguage.name} image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }
           </ul>
      </section>
      </div>
      <FooterLinksNav/>
      </>
   
  )
}
