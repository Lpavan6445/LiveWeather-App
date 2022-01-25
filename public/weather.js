
  function setWeather(){
    var city =  document.getElementById("city").value
    let mapUrl = `https://www.google.com/maps/embed/v1/search?q=${city}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    var maps =document.getElementById("maps")
      maps.setAttribute("src",mapUrl) 

    let wetherContainer = document.getElementById("wetherContainer")
    // wetherContainer.style.backgroundColor= "white";
  }
  // Weather Of a city
  async function getWeather(){
        var city =  document.getElementById("city").value
        // let key = "a9ba5c2d0a86c8faf099e48ad05b83d3"
        let key ="d9cf80cf524baa91b660512aa37ee574"
        // let url =`https:api.openweathermap.org/data/2.5/weather?q=${city}&cnt=7&appid=${key}`
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&cnt=7`
        let wall = document.createElement("main")

        let res = await fetch(url)
        let data = await res.json()
        // let temp = data.main.temp
        // temp = Math.round(temp - 273)

        console.log(data)
        setWeather()
        showWeather(data)
  }

  function showWeather(data) {
    var forecast = data.list
    var i=0;
    // <---------------------Middle left------------------->
    var todayIcon = document.getElementById("todayIcon")
      todayIcon.setAttribute("src",`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`)
    var todayTemp = document.getElementById("todayTemp")
      todayTemp.innerHTML = `${Math.floor(forecast[0].main.temp)}°C`
    // <---------------------Middle Right---------------------->
    var sunrise = document.getElementById("sunrise")
    var sunr =new Date(data.city.sunrise*1000)
      sunrise.innerHTML = `${sunr.toLocaleTimeString('en-US')}`
    var sunset = document.getElementById("sunset")
    var suns =new Date(data.city.sunset*1000)
    console.log(data.city.sunset)
      sunset.innerHTML = `${suns.toLocaleTimeString('en-US')}`
    var wind = document.getElementById('wind')
      wind.innerHTML = `${forecast[0].wind.speed} m/s` 
    var minMaxTemp = document.getElementById('minMaxTemp')
    minMaxTemp.innerHTML = `MaxTemp: ${Math.floor(forecast[0].main.temp_max)}°C  ||  MinTemp: ${Math.floor(forecast[0].main.temp_min)}°C`

    forecast.forEach(function(day){
       console.log(day.weather[0].icon)
       var cloud = document.getElementById("cloud")
         cloud.innerHTML = data.list[0].weather[0].description
           
  // <-----------------------ForeCast 7-days--------------------->
       var forecastIcon = day.weather[0].icon
       var forecastIconURL =  `http://openweathermap.org/img/wn/${forecastIcon}@2x.png`
     
       const dayIndex = new Date().getDay();
       const getDayName = (dayIndex) =>{
         const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];
         return days[dayIndex%7];
       }
       const dayName = getDayName(dayIndex+i)
       console.log(dayName)
       var dayNam = document.getElementsByClassName("forecastDay")
       dayNam[i].textContent = dayName.slice(0,3)

       var  divforcastIcon = document.getElementsByClassName("forecastIcon")
        divforcastIcon[i].setAttribute("src",forecastIconURL)
       var forecastTemp = document.getElementsByClassName("forecastTemp")
        forecastTemp[i].innerHTML = `${Math.floor(day.main.temp)}°C`
       i++


        // <-----------------------City Name(top right)--------------------->
       var cityName = document.getElementById("ciT")
         cityName.innerHTML = city.value
       
         var Todaydate = document.getElementById("Todaydate")
         Todaydate.innerHTML = `${getDayName(dayIndex)}day`
         console.log(city.value)
    })


    

  }
//   const dayIndex = new Date().getDay();
// const getDayName = (dayIndex) =>{
// 	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// 	return days[dayIndex];
// }
// console.log(getDayName())\