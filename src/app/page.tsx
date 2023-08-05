
import Link from "next/link"
import dataStaticJson from "./list.json"
import { Stack } from "./components/stacks"
export default function Home() {
  const data =dataStaticJson
  //Oi, eu sou o Michel

//Sou um desenvolvedor Frontend autodidata com mais de 1 ano e meio de experiência profissional em design e desenvolvimento de interfaces, teste de recursos e push de código. Proficiente no uso de uma ampla variedade de ferramentas para agregar valor e aprimorar a experiência do usuário.
  
  return (
    <div className="flex flex-col w-screen items-center justify-between p-24">
      <div className="flex flex-col   items-center justify-between">
          <ul className="flex flex-col items-center justify-between">
          <div className="flex">
            <h1 className="text-white text-center text-[1rem] font-bold">Linguagem de programação</h1>
          </div>
          <div className={`grid grid-cols-3 gap-5 px-32 py-12`}>
          {
            data.about_me.main_technologies.programe_language.map((pgLanguage)=>{
             
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo name={pgLanguage.name} image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }</div>
        </ul>
        <ul className="flex flex-col items-center justify-between">
        <div className="flex">
            <h1 className="text-white text-center text-[1rem] font-bold">Bibliotecas e frameworks</h1>
          </div>
        <div className={`grid grid-cols-3 gap-5 px-32 py-12`}> 
       {
            data.about_me.main_technologies.libs_and_framworks.map((pgLanguage)=>{
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo name={pgLanguage.name} image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }
           </div>
          </ul>
     </div>
      </div>
   
  )
}
