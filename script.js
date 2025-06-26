const apiKey = '4860d61b17a811e03d684dbf64d4f8ae';  

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("API URL:", url);
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const result = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Forecast:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(err => {
      document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${err.message}</p>`;
    });
}
