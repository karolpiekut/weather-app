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

const moonSVG = document.createElement('img');
moonSVG.src = 'icons/clear-night.svg';
const partlyCloudySVG = document.createElement('img');
partlyCloudySVG.src = 'icons/partly-cloudy-day.svg';
const snowSVG = document.createElement('img');
snowSVG.src = 'icons/snow.svg';
const sunnySVG = document.createElement('img');
sunnySVG.src = 'icons/clear-day.svg';
const rainSVG = document.createElement('img');
rainSVG.src = 'icons/rain.svg';
const thunderstormSVG = document.createElement('img');
thunderstormSVG.src = 'icons/thunder.svg';
const cloudySVG = document.createElement('img');
cloudySVG.src = 'icons/cloudy.svg';

const searchResult = document.createElement('p');
const temperature = document.createElement('p');
const windSpeed = document.createElement('p');
const precipitation = document.createElement('p');
const humidity = document.createElement('p');
const feelsLikeTemp = document.createElement('p');
const uvIndex = document.createElement('p');

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




(async () => {
    let currentPlace = (await getWeather())
    console.log(currentPlace)
    if (currentPlace['currentConditions'].icon === 'clear-night') {
        addWeatherIcon(moonSVG);
    }
    searchResult.textContent = currentPlace.address;
    temperature.textContent = currentPlace.currentConditions.temp;
    windSpeed.textContent = currentPlace.currentConditions.windspeed;
    precipitation.textContent = currentPlace.currentConditions.precip;
    humidity.textContent = currentPlace.currentConditions.humidity;
    feelsLikeTemp.textContent = currentPlace.currentConditions.feelslike;
    uvIndex.textContent = currentPlace.currentConditions.uvindex;
    addWeatherData(searchResult);
    addWeatherData(temperature);
    addWeatherData(windSpeed);
    addWeatherData(precipitation);
    addWeatherData(humidity);
    addWeatherData(feelsLikeTemp);
    addWeatherData(uvIndex);
    console.log(changeToC(currentPlace.currentConditions.temp))
})()







