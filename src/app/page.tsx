
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-28 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      <div 
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20"
      >
          <Link href={'/posts'}><h2 className={`mb-3 text-2xl font-semibold  text-white`}>
            Posts{' '}
          </h2>
          </Link>
          </div>
          

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20"
        
        >
           <Link href={'/projects'}>
            <h2 className={`mb-3 text-2xl font-semibold  text-white`}>
            Projects{' '}
          </h2>
          </Link>
        </div>
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20"
        >
           <Link href={'/learning'}>
           <h2 className={`mb-3 text-2xl font-semibold  text-white`}>
            Learning{' '}
          </h2>
           </Link>
         
        
        </div>

      </div>
    </main>
  )
}
