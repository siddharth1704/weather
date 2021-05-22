const storage= new Storage();
const weatherLocation=storage.getLocationData();
const weather =new Weather(weatherLocation.city);
 

const ui=new UI();

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',(e)=>
 {
  const city=document.getElementById('city').value;
  weather.changeLocation(city); 
  getWeather();
  $('#locModal').modal('hide');

  storage.setLocationData(city);
});

function getWeather(){
 weather.getWeather()
  .then(results =>{
    ui.paint(results)
    console.log(results)
  })
  .catch(err => console.log(err))
}

