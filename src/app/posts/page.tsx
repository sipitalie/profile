import Projects from "../components";
import Movies from "../components";


export default async function PostsPage(){
    const data =[
        {
            id:"ooie2212",
            name:"Rochelle, Rochelle",
            rating:3.25,
            starRating:3,
            
            year:2020,
            genre:"Romance",
            runtime:"1h:56m",
            cast:"Emilia Clarke"},
            {
                id:"ooie2212",
                name:"Rochelle, Rochelle",
                rating:3.25,
                starRating:3,
                
                year:2020,
                genre:"Romance",
                runtime:"1h:56m",
                cast:"Emilia Clarke"},
                {
                    id:"ooie2212",
                    name:"Rochelle, Rochelle",
                    rating:3.25,
                    starRating:3,
                    
                    year:2020,
                    genre:"Romance",
                    runtime:"1h:56m",
                    cast:"Emilia Clarke"},
                    {
                        id:"ooie2212",
                        name:"Rochelle, Rochelle",
                        rating:3.25,
                        starRating:3,
                        
                        year:2020,
                        genre:"Romance",
                        runtime:"1h:56m",
                        cast:"Emilia Clarke"},
                        {
                            id:"ooie2212",
                            name:"Rochelle, Rochelle",
                            rating:3.25,
                            starRating:3,
                            
                            year:2020,
                            genre:"Romance",
                            runtime:"1h:56m",
                            cast:"Emilia Clarke"},
                            {
        id:"ooie2212",
        name:"Rochelle, Rochelle",
        rating:3.25,
        starRating:3,
        
        year:2020,
        genre:"Romance",
        runtime:"1h:56m",
        cast:"Emilia Clarke"},
        {
            id:"ooie2212",
            name:"Rochelle, Rochelle",
            rating:3.25,
            starRating:3,
            
            year:2020,
            genre:"Romance",
            runtime:"1h:56m",
            cast:"Emilia Clarke"},
            {
                id:"ooie2212",
                name:"Rochelle, Rochelle",
                rating:3.25,
                starRating:3,
                
                year:2020,
                genre:"Romance",
                runtime:"1h:56m",
                cast:"Emilia Clarke"}
            ]
  

    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Projects repos={data}/>
        </div>
    )

}

 