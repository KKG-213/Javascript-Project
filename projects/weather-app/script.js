async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '86d76bebe31ebd1db4726a1f5bb58e5f'; // Tumhari API Key

    if (city === '') {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // Console mein pura data aa jayega

        if (data.cod == 404) {
            document.getElementById('weatherResult').innerHTML = "❌ City not found!";
        } else {
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡️ Temperature: ${data.main.temp} °C</p>
                <p>🌥️ Weather: ${data.weather[0].description}</p>
            `;
        }
    } catch (error) {
        console.error(error);
        document.getElementById('weatherResult').innerHTML = "⚠️ Something went wrong. Try again!";
    }
}
