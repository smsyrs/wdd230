const api_url = 'https://api.openweathermap.org/data/2.5/weather?id=5800420&appid=e0e262f4f6566266c6126bc71bf7edd9&units=imperial'

fetch(api_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        displayInfo(city);
    })
function displayInfo(city){
    document.querySelector('#current-temp').textContent = city.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${city.weather[0].icon}.png`;
    const desc = city.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
}