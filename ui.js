class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    console.log(weather);
    this.location.textContent=weather.name;
    var iconurl = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
    this.icon.src=iconurl;
    this.humidity.textContent=`Relative Humidity:${weather.main.humidity}%`;
    this.feelsLike.textContent=`Feels Like : ${weather.main.feels_like} °C`;
    this.string.textContent=`${weather.main.temp}°C`;
    this.wind.textContent=`Wind Speed: ${weather.wind.speed} m/s ${weather.wind.deg}°`;
    this.dewpoint.textContent=`Visibilty: ${weather.visibility} meters`;
    this.desc.textContent=weather.weather[0].main;
    console.log(this.feelsLike)
  }
}