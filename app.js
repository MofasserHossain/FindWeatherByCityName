document.getElementById("sumbit").addEventListener("click", () => {
    const inputText = document.getElementById("input");
    inputValue(inputText.value);
    inputText.value = "";
});
const inputValue = countryName => {
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=a3bd14cc2f3a2dbcee3a1e2416212388`;
    fetch(apiLink)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            apiResult(data);
        })
}
const apiResult = apiData => {
    // console.log(apiData);
    const cityName = document.getElementById('cityName');
    const cityTemp = document.getElementById('temp');
    const cloud = document.getElementById("weatherType");
    const image = document.getElementById("weatherImg");
    cityName.innerText = apiData.name;
    cityTemp.innerText = apiData.main.temp;
    cloud.innerText = apiData.weather[0].main;
    image.src = `https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`;
}