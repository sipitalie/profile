
import Link from "next/link"
import dataStaticJson from "./list.json"
import { Stack } from "./components/stacks"
export default function Home() {
  const data =dataStaticJson
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-28 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
      <div 
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20"
      >
          <Link href={'/posts'}><h2 className={`text-2xl font-semibold  text-white`}>
            Posts{' '}
          </h2>
          </Link>
          </div>
          

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20"
        
        >
           <Link href={'/projects'}>
            <h2 className={`text-2xl font-semibold  text-white`}>
            Projects{' '}
          </h2>
          </Link>
        </div>
      </div>
      <div className="flex mt-8 ml-5 mr-5 ">
      <div className="flex w-60  mx-5 bg-white">
        <ul>
          {
            data.about_me.main_technologies.libs_and_framworks.map((pgLanguage)=>{
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }
        </ul>
      </div>
      <div>
        <ul>
          {
            data.about_me.main_technologies.programe_language.map((pgLanguage)=>{
              return (
              <Stack.Root key={pgLanguage.name}>
                <Stack.Logo image_link={pgLanguage.url_log}/>
                <Stack.Description text={pgLanguage.name} />
              </Stack.Root>)
            })

          }
        </ul>
      </div>
      </div>
    </main>
  )
}
