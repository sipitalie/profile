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
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <Projects repos={repos}/>
    </div>
    )

}
/*
 
:root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;
    }
  }
  
  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }
*/