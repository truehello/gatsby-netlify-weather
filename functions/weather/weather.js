const fetch = require("node-fetch");

const WEATHER_API_KEY = process.env.WEATHERAPI;

exports.handler = async (event, context) => {
    const lat = event.queryStringParameters.lat || 35;
    const lng = event.queryStringParameters.lng || 139;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHER_API_KEY}`;
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric`;


  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        //"X-Api-Key": WEATHER_API_KEY,
        'Access-Control-Allow-Origin' : '*',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "success", detail: data }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
