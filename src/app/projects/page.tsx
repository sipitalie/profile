import Projects from "../components";

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

   const repos=data?.map(repo=>{
    return {
        id:repo.id,
        name:repo.name,
        rating:3.25,
        starRating:3,
        year:2020,
        genre:"Romance",
        runtime:"1h:56m",
        cast:"Emilia Clarke"
    }

   })
   
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Projects repos={repos}/>
    </div>
    )

}

 