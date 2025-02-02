const apiKey = "d5503e7faff769e234cf48d0383a041b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const btn = document.querySelector(".search-div button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        window.alert("Invalid City name!!")
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        document.querySelector(".weather-detail").style.display = "block"
    }
}

btn.addEventListener("click", () => {
    const serchVal = document.querySelector("input");
    checkWeather(serchVal.value);
})