const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");


const loading = document.getElementById("loading");

const error = document.getElementById("error");


const weatherResult = document.getElementById("weatherResult");


const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const condition = document.getElementById("condition");


const weatherIcon = document.getElementById("weatherIcon");

const forecast = document.getElementById("forecast");





searchBtn.addEventListener("click",()=>{


    let city = cityInput.value.trim();


    if(city){

        getWeather(city);

    }


});






async function getWeather(city){


try{


loading.classList.remove("hidden");

error.classList.add("hidden");

weatherResult.classList.add("hidden");





const locationResponse = await fetch(

`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`

);



const locationData = await locationResponse.json();



if(!locationData.results){

    throw new Error("City not found");

}



const latitude = locationData.results[0].latitude;

const longitude = locationData.results[0].longitude;

const name = locationData.results[0].name;






const weatherResponse = await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&daily=temperature_2m_max,weathercode&timezone=auto`

);



const weatherData = await weatherResponse.json();





displayWeather(name,weatherData);





}

catch(err){


error.innerText = err.message;

error.classList.remove("hidden");


}



finally{


loading.classList.add("hidden");


}



}






function displayWeather(city,data){


weatherResult.classList.remove("hidden");



cityName.innerText = city;



temperature.innerText =

`${data.current.temperature_2m}°C`;



condition.innerText =

getWeatherCondition(data.current.weathercode);



weatherIcon.src =

getWeatherIcon(data.current.weathercode);





forecast.innerHTML="";





for(let i=1;i<=3;i++){


let card=document.createElement("div");


card.className="forecast-card";



card.innerHTML=`

<h3>Day ${i}</h3>

<img src="${getWeatherIcon(data.daily.weathercode[i])}">

<p>${data.daily.temperature_2m_max[i]}°C</p>

`;



forecast.appendChild(card);



}



}







function getWeatherCondition(code){


if(code===0)

return "Clear Sky ☀️";


else if(code<=3)

return "Partly Cloudy ☁️";


else if(code<=67)

return "Rainy 🌧️";


else if(code<=77)

return "Snowy ❄️";


else

return "Thunderstorm ⛈️";


}







function getWeatherIcon(code){


if(code===0)

return "https://cdn-icons-png.flaticon.com/512/869/869869.png";


else if(code<=3)

return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";


else if(code<=67)

return "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";


else

return "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";


}