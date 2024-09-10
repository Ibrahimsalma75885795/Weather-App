document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const cityInput = document.getElementById('cityInput').value;
    const weatherData = {
        const : weatherData = {
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
            "Paris": {
              description: "Partly Cloudy",
              temp: 20,
              humidity: 60,
            },
            "Sydney": {
              description: "Sunny",
              temp: 22,
              humidity: 45,
            },
            "Moscow": {
              description: "Snowy",
              temp: -5,
              humidity: 90,
            },
            "Rio de Janeiro": {
              description: "Hot and Humid",
              temp: 32,
              humidity: 80,
            },
            "Dubai": {
              description: "Hot",
              temp: 40,
              humidity: 15,
            },
            "Toronto": {
              description: "Cold and Windy",
              temp: -2,
              humidity: 75,
            },
            "Berlin": {
              description: "Cloudy",
              temp: 12,
              humidity: 65,
            },
            "Mexico City": {
              description: "Rainy",
              temp: 19,
              humidity: 70,
            },
            "Beijing": {
              description: "Hazy",
              temp: 28,
              humidity: 60,
            },
            "Cape Town": {
              description: "Clear",
              temp: 18,
              humidity: 50,
            },
            "Buenos Aires": {
              description: "Warm",
              temp: 24,
              humidity: 55,
            },
            "Rome": {
              description: "Sunny",
              temp: 27,
              humidity: 40,
            },
            "Delhi": {
              description: "Hot and Dusty",
              temp: 37,
              humidity: 30,
            },
            "Istanbul": {
              description: "Cloudy",
              temp: 16,
              humidity: 65,
            },
            "Bangkok": {
              description: "Rainy",
              temp: 30,
              humidity: 80,
            },
            "Singapore": {
              description: "Humid and Rainy",
              temp: 31,
              humidity: 85,
            },
            "Seoul": {
              description: "Partly Cloudy",
              temp: 22,
              humidity: 55,
            },
            "Los Angeles": {
              description: "Sunny",
              temp: 28,
              humidity: 40,
            },
            "Nairobi": {
              description: "Sunny",
              temp: 25,
              humidity: 50,
            },
            "Lagos": {
              description: "Humid",
              temp: 29,
              humidity: 80,
            },
            "Tehran": {
              description: "Dry and Hot",
              temp: 36,
              humidity: 20,
            },
            "Venice": {
              description: "Cloudy",
              temp: 18,
              humidity: 75,
            },
            "Madrid": {
              description: "Sunny",
              temp: 30,
              humidity: 40,
            },
            "Lisbon": {
              description: "Clear",
              temp: 28,
              humidity: 45,
            },
            "Havana": {
              description: "Warm",
              temp: 29,
              humidity: 70,
            },
            "Casablanca": {
              description: "Windy",
              temp: 22,
              humidity: 65,
            },
            "Johannesburg": {
              description: "Cloudy",
              temp: 18,
              humidity: 60,
            },
            "Mumbai": {
              description: "Rainy",
              temp: 28,
              humidity: 85,
            },
            "Copenhagen": {
              description: "Cloudy",
              temp: 14,
              humidity: 70,
            },
            "Prague": {
              description: "Cloudy",
              temp: 13,
              humidity: 65,
            },
            "Stockholm": {
              description: "Partly Cloudy",
              temp: 12,
              humidity: 60,
            },
            "Vancouver": {
              description: "Rainy",
              temp: 11,
              humidity: 80,
            },
            "São Paulo": {
              description: "Cloudy",
              temp: 26,
              humidity: 65,
            },
            "Manila": {
              description: "Hot and Humid",
              temp: 33,
              humidity: 80,
            },
            
            // Egyptian Governorates
            "Alexandria": {
              description: "Cloudy",
              temp: 28,
              humidity: 65,
            },
            "Aswan": {
              description: "Hot",
              temp: 42,
              humidity: 10,
            },
            "Luxor": {
              description: "Sunny",
              temp: 40,
              humidity: 15,
            },
            "Giza": {
              description: "Sunny",
              temp: 36,
              humidity: 20,
            },
            "Suez": {
              description: "Windy",
              temp: 29,
              humidity: 50,
            },
            "Port Said": {
              description: "Cloudy",
              temp: 26,
              humidity: 60,
            },
            "Ismailia": {
              description: "Sunny",
              temp: 31,
              humidity: 40,
            },
            "Sharm El Sheikh": {
              description: "Sunny",
              temp: 39,
              humidity: 15,
            },
            "Hurghada": {
              description: "Hot",
              temp: 38,
              humidity: 18,
            },
            "Fayoum": {
              description: "Warm and Sunny",
              temp: 35,
              humidity: 25,
            },
            "Beni Suef": {
              description: "Sunny",
              temp: 36,
              humidity: 20,
            },
            "Minya": {
              description: "Sunny",
              temp: 35,
              humidity: 30,
            },
            "Sohag": {
              description: "Cloudy",
              temp: 36,
              humidity: 20,
            },
            "Assiut": {
              description: "Partly Cloudy",
              temp: 37,
              humidity: 18,
            },
            "Qena": {
              description: "Hot",
              temp: 39,
              humidity: 12,
            },
            "Matrouh": {
              description: "Cloudy",
              temp: 23,
              humidity: 70,
            },
            "North Sinai": {
              description: "Windy",
              temp: 28,
              humidity: 45,
            },
            "South Sinai": {
              description: "Sunny",
              temp: 38,
              humidity: 18,
            },
            "New Valley": {
              description: "Hot",
              temp: 41,
              humidity: 10,
            },
            "Damietta": {
              description: "Cloudy",
              temp: 25,
              humidity: 65,
            },
            "Beheira": {
              description: "Cloudy",
              temp: 28,
              humidity: 60,
            },
            "Sharqia": {
              description: "Sunny",
              temp: 34,
              humidity: 30,
            },
            "Dakahlia": {
              description: "Cloudy",
              temp: 28,
              humidity: 65,
            },
            "Gharbia": {
              description: "Cloudy",
              temp: 30,
              humidity: 60,
            },
            "Monufia": {
              description: "Clear",
              temp: 31,
              humidity: 55,
            },
            "Kafr El Sheikh": {
              description: "Cloudy",
              temp: 27,
              humidity: 65,
            },
            "Qalyubia": {
              description: "Sunny",
              temp: 35,
              humidity: 25,
            }
          }
          
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
  
