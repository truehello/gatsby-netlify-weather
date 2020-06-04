import React, { useState, useEffect } from "react"
//const axios = require("axios")
import axios from "axios"
const WeatherContext = React.createContext({})

exports.WeatherContext = WeatherContext

const WeatherProvider = props => {
  //const [user, setUser] = React.useState();
  //const [isLoading, setIsLoading] = React.useState(false);
  //const [isError, setIsError] = React.useState(false);
  const [data, setData] = useState("hello")
  const [lon, setLongitude] = useState(51.51)
  const [lat, setLatitude] = useState(-0.13)

  useEffect(() => {
    const fetchData = async () => {
      //setIsError(false);
      //setIsLoading(true);
      setLongitude(51.51)
      setLatitude(-0.13)

      try {
        const result = await axios(`/api/weather?lat=${lat}&lon=${lon}`)

        setData(result)
      } catch (error) {
          console.log("error terror")
        ///setIsError(true);
      }

      console.log(" should go here")
      // setIsLoading(false);
    }

    fetchData()
  }, [lat, lon])

  //   netlifyWeather.on("login", user => {
  //     setUser(user);
  //   });
  //   netlifyWeather.on("logout", () => setUser());

  return (
    <WeatherContext.Provider value={{ Weather: data }}>
      {props.children}
    </WeatherContext.Provider>
  )
}

exports.Provider = WeatherProvider
