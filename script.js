document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const cityInput = document.getElementById('cityInput').value;
    
    // Predefined weather data
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
  
    const defaultWeather = {
      description: "Partly Cloudy",
      temp: 22,
      humidity: 60,
    };
  
    const weatherResult = document.getElementById('weatherResult');
    
    // Check if city exists in predefined weather data
    const weather = weatherData[cityInput] || defaultWeather;
  
    // Display the weather info (either predefined or default)
    weatherResult.innerHTML = `
      <h2>Weather in ${cityInput}</h2>
      <p>Description: ${weather.description}</p>
      <p>Temperature: ${weather.temp}°C</p>
      <p>Humidity: ${weather.humidity}%</p>
    `;
  });
  