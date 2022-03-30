const Forecast=({forecastData,getDayName})=>{
    // console.log(forecastData)
    const dayIndex = new Date().getDay();
    return(
        <div className="forecast">
           {forecastData.length>0? forecastData.map((data,i)=><div className="subforcast"> 
                <p className="forecastDay">{getDayName(dayIndex+i)}</p>
                
                <img className="forecastIcon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
                <p className="forecastTemp">{`${Math.floor(data.main.temp)}°C`}</p>
            </div>):""}
        </div>
    )
}
export default Forecast
