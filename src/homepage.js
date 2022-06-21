import axios from "axios";
import { useEffect, useState } from "react";
import "./homepage.css"


function Homepage() {
  const [movies,setMovies] = useState([])
  const [error,setError] = useState("")
  async function fetch(e){
    try {
      const response = await axios.get("https://api.adjaranet.com/api/v1/trailers/trailer-day?page=1&per_page=100&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1&source=adjaranet")
           console.log(response.data)
           setMovies(response.data.data)
    } catch (e) {
      setError(e.message) 
    }
  }
  useEffect(()=>{
    fetch()
  },[])
  return (
    <div className="mainDiv">
                     
          {movies.map((item,index)=>(
            <li  key={index}>
                   <a href={item.imdbUrl} target="_blank" > <img  src={item.poster}  width="150px" height="200px"/> </a>
                   <div id="k">{item.secondaryName}</div>
            </li>
          ))}  
          {error}   
    </div>
  );
}

export default Homepage;