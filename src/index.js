import getCurrentData from './weatherApi';
import { displayCurrentLocationData, displayFutureForecastData, displayImperialUnits, displayMetricUnits } from './view';

const searchField = document.getElementById('searchField');
const searchForm = document.getElementById('searchForm');
const searchButton = document.getElementById('searchButton');
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');

let metricUnit = true;

async function submitSearch() {
  const searchValue = searchField.value;
  const locationObj = await getCurrentData(searchValue);
  displayCurrentLocationData(locationObj);
  displayFutureForecastData(locationObj);
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchButton.addEventListener('click', submitSearch);

metricButton.addEventListener('click', () => {
  if (metricUnit) return;
  metricUnit = true;
  displayMetricUnits();
  imperialButton.classList.remove('selectedButton');
  metricButton.classList.add('selectedButton');
});

imperialButton.addEventListener('click', () => {
  if (!metricUnit) return;
  metricUnit = false;
  displayImperialUnits();
  imperialButton.classList.add('selectedButton');
  metricButton.classList.remove('selectedButton');
});
