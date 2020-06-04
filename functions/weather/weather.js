const fetch = require("node-fetch");

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

exports.handler = async (event, context) => {
    const lat = event.queryStringParameters.lat || 51.51;
    const lon = event.queryStringParameters.lng || -0.13;

    //const userIP = event.requestContext.identity.sourceIp
    //const userIP = context.identity.sourceIp
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    //console.log("context ="+JSON.stringify(context))
    //console.log("x-forwarded-for ="+ event.headers['x-forwarded-for'])
    console.log("IP ="+JSON.stringify( event.headers['client-ip']))
    //event.headers['x-requested-with']

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": WEATHER_API_KEY,
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

