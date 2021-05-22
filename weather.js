class Weather {
  constructor(city) {
    this.apiKey = '3253aada5485326ee00662309cbc82ee';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}