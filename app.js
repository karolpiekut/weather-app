// async function getWeather() {
//     const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York?unitGroup=us&key=LD4DKRU5NCMMDQM365J4C6429&contentType=json",
//         {
//             mode: "cors",
//         });
//git clone https://github.com/LazyVim/starter ~/.config/nvim     const weatherData = await response.json();
//     console.table(weatherData);
// }
//
// getWeather();

async function getWeather(searchValue) {
    //   const response = await fetch("./newYork.json",
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?unitGroup=us&key=LD4DKRU5NCMMDQM365J4C6429&contentType=json`,
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
const searchLocation = "Walbrzych";


function createWeatherIcon(conditionName) {
    const iconSVG = document.createElement('img');
    iconSVG.src = `weather-icons/${conditionName}.svg`;
    return iconSVG;
}

function changeToC(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
}

function amendToCelsius(val) {
    temperature.innerText = (changeToC(val)) + "°";
}

function truncateString(par) {
    return par.slice(0, 25) + "..."
}


async function populateWeatherData(userInput) {

    let currentPlace = (await getWeather(userInput));

    if (currentPlace.address.length > 25) {
        locationOutput.innerText = truncateString(currentPlace.address);
    } else {
        locationOutput.innerText = currentPlace.address;
    }

    let createWeatherIconTemp = createWeatherIcon(currentPlace.currentConditions.icon);
    weatherIcon.src = createWeatherIconTemp.src;
    weatherIcon.alt = currentPlace.currentConditions.icon;

    temperature.innerText = currentPlace.currentConditions.temp + "F";

    cButton.addEventListener('click', function() {
        amendToCelsius(currentPlace.currentConditions.temp);
    });

    fButton.addEventListener('click', function() {
        temperature.innerText = currentPlace.currentConditions.temp + "F";
    })
}


populateWeatherData("Wałbrzych");

submitButton.addEventListener('click', function() {
    if (searchBox.value === "") {
        alert("please input a search value");
    } else {
        currentPlace = populateWeatherData(searchBox.value);
    }
});



