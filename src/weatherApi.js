/* eslint-disable prefer-destructuring */

/* Extract the neccesary location data from the fetched object
Expects a js object */
// function extractData(data) {
//   const name = data.location.name;
//   const country = data.location.country;

//   console.log(name, country);
//   return name;
// }

// Get the forecast for todays weather in a specified location using the weather api
// Note: Free version only gets 3 days forecast, hence we only do 3 days
async function getCurrentData(location) {
  // console.log(location);
  const url = `https://api.weatherapi.com/v1/forecast.json?key=866893fd6b4045d4925130358233010&q=${location}&days=3`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const locationObj = await response.json();
    console.log(locationObj);
    // const data = extractData(locationObj);
    return locationObj;
  } catch (error) {
    console.log(error.message);
    console.log("couldnt find place");
  }
  return null;
}

export default getCurrentData;
