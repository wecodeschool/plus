function formatDate(date) {
  let day = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${days[day]} ${date.getHours()}:${minutes}`;
}

function showWeather(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);

  let place = document.querySelector("#place");
  place.innerText = response.data.name;

  let description = document.querySelector("#description");
  description.innerText = response.data.weather[0].description;

  let humidity = document.querySelector("#humidity");
  humidity.innerText = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerText = Math.round(response.data.wind.speed);

  let date = document.querySelector("#date");
  date.innerText = formatDate(new Date(response.data.dt * 1000));

  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
  );
}

let city = "Lisbon";
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather);
