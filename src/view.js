const locationElement = document.getElementById('location');
const countryElement = document.getElementById('country');
const dateElement = document.getElementById('date');
const conditionIconElement = document.getElementById('conditionIcon');
const conditionTextElement = document.getElementById('conditionText');
const currentTempElement = document.getElementById('currentTemp');
const feelsLikeTempElement = document.getElementById('feelsLikeTemp');
const windElement = document.getElementById('wind');
const precipElement = document.getElementById('precip');
const humidityElement = document.getElementById('humidity');
const uvElement = document.getElementById('uv');

//TODO: Create switch to check whether to display C/F, mm/in, mph/kph
export function displayCurrentLocationData(locationObj) {
  console.log('jo');

  const location = locationObj.location.name;
  const { country } = locationObj.location;
  const { date } = locationObj.forecast.forecastday[0];

  const conditionIcon = locationObj.current.condition.icon;
  const conditionText = locationObj.current.condition.text;
  const currentTemp = locationObj.current.temp_c;
  const feelsLikeTemp = locationObj.current.feelslike_c;

  const wind = locationObj.current.wind_kph;
  const precip = locationObj.current.precip_mm;
  const { humidity } = locationObj.current;
  const { uv } = locationObj.current;

  locationElement.innerText = location;
  countryElement.innerText = country;
  dateElement.innerText = date;
  conditionIconElement.src = conditionIcon;
  conditionTextElement.innerText = conditionText;
  currentTempElement.innerText = `${currentTemp}°C`;
  feelsLikeTempElement.innerText = `Feels like: ${feelsLikeTemp}°C`;
  windElement.innerText = `Wind: ${wind}kph`;
  precipElement.innerText = `Precip: ${precip}mm`;
  humidityElement.innerText = `Humidity: ${humidity}%`;
  uvElement.innerText = `UV: ${uv}`;
}

export function displayFutureForecastData(locationObj) {
  const forecastContainer = document.getElementsByClassName('forecastContainer')[0];
  locationObj.forecast.forecastday.forEach((forecastDay) => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('dayDisplay');
    const header = document.createElement('div');
    header.innerText = forecastDay.date;
    const icon = document.createElement('img');
    icon.src = forecastDay.day.condition.icon;
    const temp = document.createElement('div');
    temp.innerText = `${forecastDay.day.mintemp_c}° / ${forecastDay.day.maxtemp_c}°`;
    const precip = document.createElement('div');
    precip.innerText = `Precip: ${forecastDay.day.totalprecip_mm}mm`;
    dayDiv.appendChild(header);
    dayDiv.appendChild(icon);
    dayDiv.appendChild(temp);
    dayDiv.appendChild(precip);
    forecastContainer.appendChild(dayDiv);
  });
}
