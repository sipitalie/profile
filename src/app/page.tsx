
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-28 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      <div 
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      >
          <Link href={'/posts'}><h2 className={`mb-3 text-2xl font-semibold`}>
            Posts{' '}
          </h2>
          </Link>
          </div>
          

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        
        >
           <Link href={'/projects'}>
            <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{' '}
          </h2>
          </Link>
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
           <Link href={'/learning'}>
           <h2 className={`mb-3 text-2xl font-semibold`}>
            Learning{' '}
          </h2>
           </Link>
         
        
        </div>

      </div>
    </main>
  )
}
