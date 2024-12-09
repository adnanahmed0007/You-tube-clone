import React, { useEffect, useState } from 'react'
import "./search.css"
const Search = () => {
  const [search,Setsearch]=useState("");
  const [click4,setClick4]=useState(false);
  const API_KEY = "your api key";
  const [Array,setArray]=useState([]);
  useEffect(()=>
  {
   if(click4)
   {
    async function  Getfetch() {
      const fetcha=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=40&order=relevance&regionCode=US&q=${search}&key=${API_KEY}`)
      if(fetcha)
      {
        const data= await fetcha.json();
        console.log(data.items);
       await setArray(data.items || []);

      }

      
    }
    Getfetch();
   }
  },[click4,search])
  return (
    <div className='Search'>
    <div className='Input_handlers'>
      <input type="text" 
      placeholder='Enterr the items to be searched'
      onChange={(e)=>Setsearch(e.target.value)}

      />
    </div>
    <div className='button_search'>
    <button onClick={()=>setClick4(!click4)}>Search</button>

    </div>
    <div  className='data_handling'>
         {search&&click4?(Array.length>0?Array.map((Videos)=>
         (
          <div className='Videos_serached' key={Videos.id.videoId}>
          <div className='Serached_data'>
          <h1>
            {Videos.snippet.title}
          </h1>
          <iframe
                    src={`https://www.youtube.com/embed/${Videos.id.videoId}`}
                    title={Videos.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>


          </div>

          </div>

         )):<div>
         <h1>Video not foud server issus</h1>
         </div>):<div className='Not_found'></div>}
         </div>

    </div>
  )
}

export default Search
