export default function ListItem({ repo }:{repo:any}) {
   
    return (
      <article className="flex items-start space-x-8 p-6 mt-5 border-solid border-2 rounded-xl border-gray-600 transition-colors hover:border-red-700 hover:bg-gray-700 hover:bg-opacity-20">
        
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-white truncate pr-20">{repo.name}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
              </dt>
              <dd className="text-slate-100">{repo.stars}</dd>
            </div>
            {repo.fork&&<div>
              <dt className="sr-only">fork or start</dt>
              <dd className="px-1.5 ring-1 ring-slate-400 rounded text-slate-400">fork</dd>
            </div>}
            <div className={repo.fork?"ml-2":"ml-0"}>
              <dt className="sr-only">Year</dt>
              <dd className="text-slate-400">{repo.year}</dd>
            </div>
            {!!repo?.description&&<div>
              <dt className="sr-only">Description</dt>
              <dd className="flex items-center text-slate-400">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {repo?.description}
              </dd>
            </div>}
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Language</dt>
              <dd className="text-slate-500">{!!repo?.language?repo.language:"Other"}</dd>
            </div>
          </dl>
        </div>
      </article>
    )
  }