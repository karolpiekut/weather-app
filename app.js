// async function getWeather() {
//     const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=us&key=LD4DKRU5NCMMDQM365J4C6429&contentType=json",
//         {
//             mode: "cors",
//         });
//     const weatherData = await response.json();
//     console.table(weatherData);
// }
//
// getWeather();

async function getWeather() {
    const response = await fetch("./newYork.json",
        {
            mode: "cors",
        });
    return await response.json();
}

const blowingSnowSVG = document.createElement('img');
blowingSnowSVG.src = 'weather-icons/blowing-snow.svg';
const clearNightSVG = document.createElement('img');
clearNightSVG.src = 'weather-icons/clear-night.svg';
const cloudySVG = document.createElement('img');
cloudySVG.src = 'weather-icons/cloudy.svg';
const drizzleSVG = document.createElement('img');
drizzleSVG.src = 'weather-icons/drizzle.svg';
const duststormSVG = document.createElement('img');
duststormSVG.src = 'weather-icons/duststorm.svg';
const fogSVG = document.createElement('img');
fogSVG.src = 'weather-icons/fog.svg';
const hailDaySVG = document.createElement('img');
hailDaySVG.src = 'weather-icons/hail-day.svg';
const hailNightSVG = document.createElement('img');
hailNightSVG.src = 'weather-icons/hail-night.svg';
const hazeSVG = document.createElement('img');
hazeSVG.src = 'weather-icons/haze.svg';
const partlyCloudySVG = document.createElement('img');
partlyCloudySVG.src = 'weather-icons/partly-cloudy.svg';
const rainSVG = document.createElement('img');
rainSVG.src = 'weather-icons/rain.svg';
const rainShowersDaySVG = document.createElement('img');
rainShowersDaySVG.src = 'weather-icons/rain-showers-day.svg';
const rainShowersNightSVG = document.createElement('img');
rainShowersNightSVG.src = 'weather-icons/rain-showers-night.svg';
const rainSnowSVG = document.createElement('img');
rainSnowSVG.src = 'weather-icons/rain-snow.svg';
const snowSVG = document.createElement('img');
snowSVG.src = 'weather-icons/snow.svg';
const snowShowerDaySVG = document.createElement('img');
snowShowerDaySVG.src = 'weather-icons/snow-shower-day.svg';
const snowShowerNightSVG = document.createElement('img');
snowShowerNightSVG.src = 'weather-icons/snow-shower-night.svg';
const snowflakeSVG = document.createElement('img');
snowflakeSVG.src = 'weather-icons/snowflake.svg';
const squallsSVG = document.createElement('img');
squallsSVG.src = 'weather-icons/squalls.svg';
const strongWindSVG = document.createElement('img');
strongWindSVG.src = 'weather-icons/strong-wind.svg';
const sunnySVG = document.createElement('img');
sunnySVG.src = 'weather-icons/sunny.svg';
const sunnyHighSVG = document.createElement('img');
sunnyHighSVG.src = 'weather-icons/sunny-high.svg';
const sunnyLowSVG = document.createElement('img');
sunnyLowSVG.src = 'weather-icons/sunny-low.svg';
const thunderstormSVG = document.createElement('img');
thunderstormSVG.src = 'weather-icons/thunderstorm.svg';


const locationOutput = document.querySelector('#location');
const temperature = document.querySelector('#temperature');
const cButton = document.querySelector('#changeToCelsius');
const fButton = document.querySelector('#changeToFahrenheit');
const weatherIcon = document.querySelector('#weatherIcon');

weatherIcon.src = sunnySVG.src;

console.log(weatherIcon);

let locationVar = "New York";  //zbędne, zastąp text content w środku funkcji na dole (async)
let temperatureVar = 38.7;

//temperature.innerText = temperatureVar + "°";
locationOutput.innerText = locationVar;

//future reference
// const windSpeed = document.createElement('p');
// const precipitation = document.createElement('p');
// const humidity = document.createElement('p');
// const feelsLikeTemp = document.createElement('p');
// const uvIndex = document.createElement('p');

const app = document.querySelector("#app");

function addWeatherIcon(iconName) {
    app.appendChild(iconName);
}

function addWeatherData(par) {
    app.appendChild(par);
}

function changeToC(temp) {
    return ((temp - 32) * 5/9).toFixed(1);
}

function amendToCelsius(val) {
    temperature.innerText = (changeToC(val)) + "°";
}

(async () => {
    let currentPlace = (await getWeather())
    // if (currentPlace['currentConditions'].icon === 'clear-night') {
    //     addWeatherIcon(moonSVG);
    // }
    // searchResult.textContent = currentPlace.address;
    // temperature.textContent = currentPlace.currentConditions.temp;

    // addWeatherData(searchResult);
    // addWeatherData(temperature);
    //temperatureVar =  currentPlace.currentConditions.tempi
    temperature.innerText = currentPlace.currentConditions.temp + "F";
    locationOutput.innerText = currentPlace.address;
    console.log(currentPlace.currentConditions.conditions);

    cButton.addEventListener('click', function() {
      amendToCelsius(currentPlace.currentConditions.temp);
        //console.log(event.target.id);
    });

    fButton.addEventListener('click', function() {
        temperature.innerText = currentPlace.currentConditions.temp + "F";
    })
})()
