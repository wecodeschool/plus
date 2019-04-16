let place                 = document.querySelector("#weather-location");
let date                  = document.querySelector("#weather-date");
let description           = document.querySelector("#weather-description");
let temperature           = document.querySelector("#weather-temperature");
let precipitation         = document.querySelector("#weather-precipitation");
let windSpeed             = document.querySelector("#weather-wind-speed");
let form                  = document.querySelector("#weather-search");
let searchInput           = document.querySelector("#weather-search-input");
let currentLocationButton = document.querySelector("#weather-current-location-button");
let icon                  = document.querySelector("#weather-icon");

let apiRoot = "https://api.openweathermap.org/data/2.5"
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";


function friendlyDate(date) {
	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	let day = days[date.getDay()];
	let hour = date.getHours();
	let minutes = date.getMinutes();

	if (minutes < 10) minutes = `0${minutes}`;


	return `${day} ${hour}:${minutes}`;
}

function handleResponse(response) {
	place.innerHTML          = response.data.name;
	date.innerHTML          = friendlyDate(new Date(response.data.dt * 1000));
	description.innerHTML   = response.data.weather[0].main;
	temperature.innerHTML   = Math.round(response.data.main.temp);
	precipitation.innerHTML = response.data.main.humidity;
	windSpeed.innerHTML     = response.data.wind.speed;
	icon.setAttribute("src", `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`);
}

function search(city) {
	let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
	event.preventDefault();
	if (searchInput.value.length) {
		search(searchInput.value);
	} else {
		alert("Please, enter a city name such as Sydney, Montreal, Lisbon, etc.");
	}
}

function searchPosition(position) {
	let apiUrl = `${apiRoot}/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);

}

function handleCurrentLocationClick(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(searchPosition)
}

form.addEventListener("submit", handleSubmit);
currentLocationButton.addEventListener("click", handleCurrentLocationClick)


search("Lisbon");