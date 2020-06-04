import React, { useState, useEffect } from "react"
//const axios = require("axios")
import axios from "axios"
//const WeatherContext = React.createContext({})
import {
  CloudRain32,
  Fog32,
  Cloud32,
  CloudSnow32,
  CloudLightning32,
  Sunny32,
  WindyDust32,
  RainDrizzle32,
  Smoke32,
  Haze32,
 Tornado32,
  ThunderstormScattered32,

  FaceDizzy32,
} from "@carbon/icons-react"

const Err = ({ error }) => (
  <div>
    Error:{error.name} {error.message}
  </div>
)

const WIcon = ({ icon }) => {
  //alert(icon)
  switch (icon) {
    case "Drizzle":
      return <RainDrizzle32 />
    case "Rain":
      return <CloudRain32 />
    case "Clear":
      return <Sunny32 />
    case "Snow":
      return <CloudSnow32 />
    case "Clouds":
      return <Cloud32 />
    case "Thunderstorm":
      return <CloudLightning32 />
    case "Mist":
      return <RainDrizzle32 />
    case "Smoke":
      return <Smoke32 /> // needs updating
    case "Fog":
      return <Fog32 />
    case "Haze":
      return <Haze32 />
    case "Dust":
      return <WindyDust32 />
    case "Squall":
      return <ThunderstormScattered32 />
    case "Tornado":
      return <Tornado32 />

    case "error":
      return <FaceDizzy32 />
    case "loading":
      return (
        <div className="flex items-center justify-center h-screen">
          Waiting...
        </div>
      )
    default:
      return <span>...</span>
  }
}

const Weather = props => {
  //const [user, setUser] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [data, setData] = useState(null)
  const [lon, setLongitude] = useState(-0.13)
  const [lat, setLatitude] = useState(51.51)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      setLongitude(-0.13)
      setLatitude(51.51)

      try {
        const result = await axios(`/api/weather?lat=${lat}&lon=${lon}`)
        setData(result.data.detail)
      } catch (error) {
        console.log("error" + error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [lat, lon])

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        Waiting...
      </div>
    )
  if (isError) return <Err error={isError} />
  if (!data)
    return (
      <div className="flex items-center justify-center h-screen">No result</div>
    )

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-black">Today's Weather for {data.name} </h1>
      <div className="my-2flex items-center justify-center">
        <WIcon icon={data.weather[0].main} />
      </div>
      <p className="text-gray-700">{data.weather[0].description}</p>
      <p className="text-3xl font-bold text-gray-900 tracking-tighter">
        {Math.round(data.main.temp)}º
      </p>
    </div>
  )
}

export default Weather
