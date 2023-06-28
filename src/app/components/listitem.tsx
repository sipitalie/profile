export default function ListItem({ repo }:{repo:any}) {
    //<Imag src={repo.image} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100"  border-red-500 />
    return (
      <article className="flex items-start space-x-8 p-6 mt-5 border-solid border-2 rounded-xl border-gray-600">
        
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-white-900 truncate pr-20">{repo.name}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
              </dt>
              <dd>{repo.starRating}</dd>
            </div>
            <div>
              <dt className="sr-only">Rating</dt>
              <dd className="px-1.5 ring-1 ring-slate-200 rounded">{repo.rating}</dd>
            </div>
            <div className="ml-2">
              <dt className="sr-only">Year</dt>
              <dd>{repo.year}</dd>
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-white-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {repo.genre}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {repo.runtime}
              </dd>
            </div>
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-slate-400">{repo.cast}</dd>
            </div>
          </dl>
        </div>
      </article>
    )
  }