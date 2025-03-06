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
    //const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Walbrzych?unitGroup=us&key=LD4DKRU5NCMMDQM365J4C6429&contentType=json",
        {
            mode: "cors",
        });
    return await response.json();
}

const locationOutput = document.querySelector('#location');
const temperature = document.querySelector('#temperature');
const cButton = document.querySelector('#changeToCelsius');
const fButton = document.querySelector('#changeToFahrenheit');
const weatherIcon = document.querySelector('#weatherIcon');
const searchBox = document.querySelector('#searchBox');
const submitButton = document.querySelector('#submitBtn');

function createWeatherIcon(conditionName) {
    const iconSVG = document.createElement('img');
    iconSVG.src = `weather-icons/${conditionName}.svg`;
    return iconSVG;
}

function changeToC(temp) {
    return ((temp - 32) * 5/9).toFixed(1);
}

function amendToCelsius(val) {
    temperature.innerText = (changeToC(val)) + "°";
}

(async () => {
    let currentPlace = (await getWeather())
    let defaultLocation = "New York";
    temperature.innerText = currentPlace.currentConditions.temp + "F";
    locationOutput.innerText = currentPlace.address;
    let createWeatherIconTemp = createWeatherIcon(currentPlace.currentConditions.icon);
    weatherIcon.src = createWeatherIconTemp.src;
    weatherIcon.alt = currentPlace.currentConditions.icon;

    submitButton.addEventListener('click', function() {
        if (searchBox.value === "") {
            alert("please input a search value");
        } else {
            alert(`I am going to search for that: "${searchBox.value}"`);
        }
    });

    cButton.addEventListener('click', function() {
      amendToCelsius(currentPlace.currentConditions.temp);
    });
    fButton.addEventListener('click', function() {
        temperature.innerText = currentPlace.currentConditions.temp + "F";
    })

})()

