document.addEventListener('DOMContentLoaded', function() {
    const temperatureElement = document.createElement('p');
    const humidityElement = document.createElement('p');
    const windSpeedElement = document.createElement('p');
    const conditionsElement = document.createElement('p');
    const updatedElement = document.createElement('p');
    const locationElement = document.createElement('p');

    const weatherUpdateDiv = document.getElementById('weather-update');
    weatherUpdateDiv.appendChild(locationElement);
    weatherUpdateDiv.appendChild(temperatureElement);
    weatherUpdateDiv.appendChild(humidityElement);
    weatherUpdateDiv.appendChild(windSpeedElement);
    weatherUpdateDiv.appendChild(conditionsElement);
    weatherUpdateDiv.appendChild(updatedElement);

    function fetchWeatherData() {
        // Replace with your API endpoint and key
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=your_city&appid=your_api_key&units=metric';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const location = `${data.name}, ${data.sys.country}`;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const conditions = data.weather[0].description;
                const lastUpdated = new Date().toLocaleString();

                locationElement.innerText = `Location: ${location}`;
                temperatureElement.innerText = `Temperature: ${temperature}°C`;
                humidityElement.innerText = `Humidity: ${humidity}%`;
                windSpeedElement.innerText = `Wind Speed: ${windSpeed} m/s`;
                conditionsElement.innerText = `Conditions: ${conditions}`;
                updatedElement.innerText = `Last Updated: ${lastUpdated}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                locationElement.innerText = 'Location: Error';
                temperatureElement.innerText = 'Temperature: Error';
                humidityElement.innerText = 'Humidity: Error';
                windSpeedElement.innerText = 'Wind Speed: Error';
                conditionsElement.innerText = 'Conditions: Error';
                updatedElement.innerText = 'Last Updated: Error';
            });
    }

    // Initial fetch
    fetchWeatherData();

    // Update weather data every 5 minutes
    setInterval(fetchWeatherData, 5 * 60 * 1000); // 5 minutes in milliseconds
});

// Function to manually update weather
function updateWeather() {
    fetchWeatherData();
}
