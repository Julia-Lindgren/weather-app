import getCurrentData from './weatherApi';
import { displayCurrentLocationData, displayFutureForecastData } from './view';

const searchField = document.getElementById('searchField');
const searchForm = document.getElementById('searchForm');
const searchButton = document.getElementById('searchButton');

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
