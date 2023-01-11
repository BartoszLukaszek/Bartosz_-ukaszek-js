const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city");
const cityName = document.getElementById("city-name");
const weatherState = document.getElementById("weather-state");
const apiKey = "&APPID=86b519a53292e52d2fe7f4562db93281";
let apiRequest = new XMLHttpRequest();
const currentTime = new Date().toLocaleTimeString();

cityForm.addEventListener("submit", event => {
	event.preventDefault();
	const chosenCity = cityInput.value;

	apiRequest.open(
		"GET",
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			chosenCity +
			apiKey
	);
	apiRequest.send();
});

apiRequest.onreadystatechange = () => {
	if (apiRequest.readyState === 4) {
		if (apiRequest.status === 404) {
			weatherState.textContent = "City not found";
		}
		const response = JSON.parse(apiRequest.response);
		cityName.textContent = response.name;
        const temperatureKelvin = response.main.temp;
        const temperatureCelsius = Math.round(temperatureKelvin  - 273.15);
        const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;
		weatherState.textContent =
			"The weather in " +
			response.name +
			" is " +
			response.weather[0].main +
			" at " + currentTime + " temperature:"+ temperatureCelsius + " C " ;

	}
};
