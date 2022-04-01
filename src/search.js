import axios from "axios";
import { useEffect, useState } from "react";
import "./search.css"

function Search() {
  const [movies,setMovies] = useState([])
  const [name,setName] = useState([])
  const [error,setError] = useState(false)
  async function fetch(e){
    try {
       setError("")
       e.preventDefault()
    const response = await axios.get("https://api.adjaranet.com/api/v1/search?filters%5Btype%5D=movie%2Ccast&keywords="+name)
          console.log(response.data)
          setMovies(response.data.data)
    } catch (e) {
        if (error!==false) {
            setError(e.message)
        }
      setMovies([])
    } 
  }

  useEffect(()=>{
    fetch()
  },[])
  const request = e =>{
    setName(e.target.value)
  }
  return (
    <>
        <div className="search">
            <input type="text" placeholder="საძიებო სიტყვა..." onChange={request} />
            <button onClick={fetch}> ძებნა</button>
        </div>
           {movies.map((movie,index)=>(
      
         <li className="overlay" key={index}>     
              <img id="image" src={movie.poster} />  
         </li> 
  ))}

              <div className="errorr">
                   {error ? <p>ფილმი ვერ მოიძებნა</p>
                        : <p></p>}
              </div> 
    </>
  );
}

export default Search;