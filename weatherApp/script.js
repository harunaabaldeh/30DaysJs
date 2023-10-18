const apiKey = "dbaf2d6ce65d99abf2f533f7a687a699";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.name.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.name.humidity + "%";
  document.querySelector(".wind").innerHTML = data.name.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
