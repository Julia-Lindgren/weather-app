/* eslint-disable prefer-destructuring */

// Get the forecast for todays weather in a specified location using the weather api
// Note: Free version only gets 3 days forecast, hence we only do 3 days
async function getCurrentData(location) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=866893fd6b4045d4925130358233010&q=${location}&days=3`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const locationObj = await response.json();
    return locationObj;
  } catch (error) {
    console.log(error.message);
    console.log("couldn't find location");
  }
  return null;
}

export default getCurrentData;
