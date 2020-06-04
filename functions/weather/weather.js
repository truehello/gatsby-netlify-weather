const fetch = require("node-fetch")

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// get the geolocation from the IP in the header
let getLocationFromIP = async userIP => {
  if (userIP === "::1") {
    userIP = "24.69.174.90"
  }
  console.log("ip in func =" + userIP)

  const url = `http://ip-api.com/json/${userIP}`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    const data = await response.json()

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail }
    }
    return {
      data,
    }
  } catch (err) {
    console.log(err)
  }
}

// get the weather for the location
let getWeatherForLocation = async location => {
  //console.log(location.data)
  const lat = location.data.lat || 51.51
  const lon = location.data.lon || -0.13

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": WEATHER_API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    const data = await response.json()

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: data.status, body: data.detail }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "success", detail: data }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}

exports.handler = async (event, context) => {
  const userIP = event.headers["client-ip"] || "24.69.174.90"

  try {
    const location = await getLocationFromIP(userIP)

    const weather = await getWeatherForLocation(location)

    return weather
  } catch (err) {
    console.log(err)
  }
}
