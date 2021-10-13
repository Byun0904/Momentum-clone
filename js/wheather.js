const API_KEY = "f9064ebc5176a5a80b8a0136c5a122a5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((respone) =>
    respone.json().then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
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
