let place = document.querySelector("#weather-city");
let timestamp = document.querySelector("#weather-timestamp");
let description = document.querySelector("#weather-description");
let temperature = document.querySelector("#weather-temperature");
let humidityLevel = document.querySelector("#weather-humidity-level");
let windSpeed = document.querySelector("#weather-wind-speed");
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiRoot = "https://api.openweathermap.org/data/2.5";

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

let city = "Bangkok";
let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(refreshWeather);
