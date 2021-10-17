const API_KEY = "f9064ebc5176a5a80b8a0136c5a122a5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((respone) =>
    respone.json().then((data) => {
      const weatherIcon = document.querySelector(
        ".weather-column span:nth-child(1)"
      );
      const weather = document.querySelector(
        ".weather-column span:nth-child(2)"
      );
      const city = document.querySelector(".weather p");
      const WEATHERSTAT = data.weather[0].main;
      let weatherName = "";
      if (WEATHERSTAT == "Clear") {
        weatherName = '<i class="fas fa-sun"></i>';
      } else if (WEATHERSTAT == "Clouds") {
        weatherName = '<i class="fas fa-cloud"></i>';
      } else if (WEATHERSTAT == "Rain") {
        weatherName = '<i class="fas fa-cloud-rain"></i>';
      } else if (WEATHERSTAT == "Thunderstorm") {
        weatherName = '<i class="fas fa-bolt"></i>';
      } else if (WEATHERSTAT == "Drizzle") {
        weatherName = '<i class="fas fa-cloud-showers-heavy"></i>';
      } else if (WEATHERSTAT == "Snow") {
        weatherName = '<i class="far fa-snowflake"></i>';
      } else if (
        WEATHERSTAT == "Mist" ||
        WEATHERSTAT == "Smoke" ||
        WEATHERSTAT == "Haze" ||
        WEATHERSTAT == "Dust" ||
        WEATHERSTAT == "Fog" ||
        WEATHERSTAT == "Sand" ||
        WEATHERSTAT == "Ash" ||
        WEATHERSTAT == "Squall" ||
        WEATHERSTAT == "Tornado"
      ) {
        weatherName = '<i class="fas fa-smog"></i>';
      }
      weatherIcon.innerHTML = weatherName;
      weather.innerText = `${Math.floor(data.main.temp).toString()}°`;
      city.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert(
    "위치 정보를 수락해주세요. 수락하지 않으면 날씨를 불러올 수 없어요..😪😪"
  );
}

// navigator.geolocation.getCurrentPosition() 함수는 wifi, 위치, gps 등의 정보를 가져올 수 있게 해주는 함수이다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
