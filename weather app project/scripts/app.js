const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    console.log(data)
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;


    // Detructure Properties
    const { cityDetails, weather } = data

    // update details template 
    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `; 

    // remove the d-none class if present

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
};


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails,
        weather,
    };
};

cityForm.addEventListener('submit', event => {
    //prevent default 
    event.preventDefault();

    // get city value from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));
});