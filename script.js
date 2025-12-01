document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    getWeather(city);
});

async function getWeather(city) {
    const errorBox = document.getElementById("error-message");
    const resultBox = document.getElementById("result");

    // Clear old errors
    errorBox.style.display = "none";
    errorBox.textContent = "";

    // If input empty
    if (!city) {
        errorBox.textContent = "Please enter a city name.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`);
        const data = await response.json();

        // If city does not exist
        if (data.cod === "404") {
            errorBox.textContent = "City not found. Please try again.";
            errorBox.style.display = "block";
            resultBox.style.display = "none";
            return;
        }

        // Display weather data
        resultBox.style.display = "block";
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("condition").textContent = data.weather[0].description;

        // Display icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const iconImg = document.getElementById("weather-icon");
        iconImg.src = iconUrl;
        iconImg.style.display = "block";

    } catch (err) {
        errorBox.textContent = "Failed to connect to the server.";
        errorBox.style.display = "block";
    }
}
