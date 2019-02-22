import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	document.getElementById('weather').innerText = _weatherService.Weather.getWeather()
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
