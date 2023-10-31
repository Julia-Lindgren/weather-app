/* eslint-disable prefer-destructuring */
function extractData(locationObj) {
  const name = data.location.name;
  const country = data.location.country;

  console.log(name, country);
}

async function getData(location) {
  console.log(location);
  const url = `https://api.weatherapi.com/v1/current.json?key=866893fd6b4045d4925130358233010&q=${location}`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const locationObj = await response.json();
    const data = extractData(locationObj);
    return data;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

export default getData;
