function refreshWeather (response){
  let temperatureElement=document.querySelector("#temperature");
let temperature=response.data.temperature.current;
  let cityElement=document.querySelector("#city");

  cityElement.innerHTML=response.data.city;
  temperatureElement.innerHTML=Math.round(temperature);
}


function searchCity(city) {
  let apiKey = "dt3bbe9160a34o69bead9ceff8624028";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
console.log(apiUrl);

}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);
 
searchCity("Helsinki");
 

