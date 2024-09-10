document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cityInput = document.getElementById('cityInput').value;
  const weatherData = {
    "New York": {
      description: "Sunny",
      temp: 25,
      humidity: 50,
    },
    "Cairo": {
      description: "Hot and Sunny",
      temp: 35,
      humidity: 20,
    },
    "Tokyo": {
      description: "Rainy",
      temp: 18,
      humidity: 85,
    },
    "London": {
      description: "Cloudy",
      temp: 15,
      humidity: 70,
    },
  };

  const weatherResult = document.getElementById('weatherResult');

  if (weatherData[cityInput]) {
    const weather = weatherData[cityInput];
    weatherResult.innerHTML = `
      <h2>Weather in ${cityInput}</h2>
      <p>Description: ${weather.description}</p>
      <p>Temperature: ${weather.temp}°C</p>
      <p>Humidity: ${weather.humidity}%</p>
    `;
  } else {
    weatherResult.innerHTML = `
      <h2>Weather data for ${cityInput} not found</h2>
    `;
  }
});
