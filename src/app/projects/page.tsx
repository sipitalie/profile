async function fetchProjects(){
    const base_url='https://api.github.com/users/sipitalie/repos'
    const res = await fetch(base_url);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default async function ProjectsPage(){
   const data =await fetchProjects()

    return(
        <div className="main">
            <h1>Projects</h1>
            <ul>
            {data.map((repo:any)=><li key={repo.id}><p>{repo.name}</p></li>)}
            </ul> 
        </div>
    )

}

 