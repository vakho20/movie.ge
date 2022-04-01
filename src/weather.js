import axios from "axios"
import { useState, useEffect  } from "react"
import "./weather.css"
function Weather(){
  const [weather,setWeather] = useState([])
  const [error,setError] = useState("")
  
    async function fetch(e){
        try {
         const respons = await axios.get("https://openweathermap.org/data/2.5/find?callback=jQuery19109857916141879122_1648670786455&q=tbilisi&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1648670786456")
                console.log(respons)
                 setWeather(respons.request.responseURL)
        } catch (e) {
          setError(e.message)
        } 
      }
      useEffect(()=>{
        fetch()
      },[])
    return(
        <>   
               <div className="white"><a href={weather} >{weather}</a></div> 
                    {error}
        </>
    )
}
export default Weather;