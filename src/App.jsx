import { useState } from 'react'
import './App.css'
import GMap from "./Components/Gmaps"
import axios from "axios";
import Forecast from "./Components/Forecast"

var initState={
   input:"",
   city:"India",
   data:{list:{}
     }
}
function App() {
   const [state, setState]= useState(initState)

   const setCity=(e)=>{
      setState({...state,input:e.target.value})
      // console.log(state)
   }  
   const search=()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${state.city}&appid=d9cf80cf524baa91b660512aa37ee574&units=metric&cnt=7`)
      .then((res)=>setState({...state, data:res.data, city:state.input}))
   }

    const dayIndex = new Date().getDay();
    const getDayName = (dayIndex) =>{
       const days = ['Sun', 'Mon', 'Tue', 'Wednes', 'Thues', 'Fri', 'Satur'];
       return days[dayIndex%7];
    }

    const sunrSuns=(sun)=>{
      var sunr =new Date(sun*1000)
      return sunr.toLocaleTimeString('en-US')
    }
   console.log(state)
  return <div className="App">
       
           <div id="head">
              <h2>Live Weather</h2>
           </div>

           {/* <!-----------Button------------------>    */}

    {/* <!--------------------------------------> */}
          <div className="main">
                <div id="wetherContainer">
                    <div className="btncontainer">
                          <div className="col-md-8">
                              <div className="search"> 
                                <input onChange={(e)=>setCity(e)} id="city" type="text" className="form-control" placeholder="Enter City Name" /> 
                                <button id="search"  onClick={()=>search()} className="btn btn-primary">Search</button>
                              </div>
                          </div>
                    </div>
               

                {/* <!-- <--------------TopRight City Name-------------------> */}
                {state.data.list.length>0?(<><div id="cityName">
                      <p id="ciT">{state.city}</p>
                      <p id="Todaydate">{getDayName(dayIndex)}day</p>
                      <p id="cloud">{state.data.list.length>0?state.data.list[0].weather[0].description:""}</p>
                </div>
                
              
                 <div id="middleLeft">
                    <img id="todayIcon" src={`http://openweathermap.org/img/wn/${state.data.list[0].weather[0].icon}@2x.png`} width="180px" />
                    <p id="todayTemp">{`${Math.floor(state.data.list[0].main.temp)}°C`}</p>
                    
                </div>
                <div id="midddleRight">
                  <div id="sr">
                      <img  src="https://img.icons8.com/ios/50/000000/sunrise--v1.png"/>
                      <p id="sunrise">{sunrSuns(state.data.city.sunrise)}</p>
                  </div>
                  <div id="sr2">
                    <img  src="https://img.icons8.com/ios-filled/50/000000/sunset.png"/>
                    <p id="sunset">{sunrSuns(state.data.city.sunset)}</p>
                  </div>
                  <div id="winddiv">
                    <img  src="https://img.icons8.com/ios-filled/50/000000/wind--v2.png"/>
                    <p id="wind">{ `${state.data.list[0].wind.speed} m/s`}</p>
                  </div>
                  <div id="minMaxT">
                    <p id="minMaxTemp">{`MaxTemp: ${Math.floor(state.data.list[0].main.temp_max)}°C  ||  MinTemp: ${Math.floor(state.data.list[0].main.temp_min)}°C`}</p>
                  </div>
                </div>
             
              <Forecast forecastData={state.data.list} getDayName={getDayName}/></>)
                :""}

              
            </div>
               
 
                {/* MapComponent */}
                <GMap city={state.city}/>
          </div>   
       </div>
  
}

export default App
