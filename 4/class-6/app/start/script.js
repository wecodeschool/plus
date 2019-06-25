function showTemperature(response) {
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

  console.log(response.data);
}

let city = "Lisbon";
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
