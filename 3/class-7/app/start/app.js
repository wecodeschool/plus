let place = document.querySelector("#weather-city");
let timestamp = document.querySelector("#weather-timestamp");
let description = document.querySelector("#weather-description");
let temperature = document.querySelector("#weather-temperature");
let humidityLevel = document.querySelector("#weather-humidity-level");
let windSpeed = document.querySelector("#weather-wind-speed");
let form = document.querySelector("#weather-search-form");
let currentLocationButton = document.querySelector(
  "#weather-current-location-button"
);

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiRoot = "https://api.openweathermap.org/data/2.5";

let defaultCity = "San Francisco";

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function refreshWeather(response) {
  place.innerHTML = response.data.name;
  timestamp.innerHTML = formatDate(new Date(response.data.dt * 1000));
  description.innerHTML = response.data.weather[0].description;
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidityLevel.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
  let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let input = document.querySelector("#weather-search-text-input");

  if (input.value.length > 0) {
    search(input.value);
  } else {
    alert("Please enter a city");
  }
}

function searchPosition(position) {
  let apiUrl = `${apiRoot}/weather?lon=${position.coords.longitude}&lat=${
    position.coords.latitude
  }&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function getCurrentLocationWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

form.addEventListener("submit", handleSearch);
currentLocationButton.addEventListener("click", getCurrentLocationWeather);

search(defaultCity);
