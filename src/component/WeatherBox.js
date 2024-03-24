import React from 'react'

const WeatherBox = ({weather}) => {
  console.log(weather)
  return (
    <div className="weather-box">
      <div className="location">{weather?.name}</div>
      <h2 className="temp">{Math.floor(weather?.main.temp)}℃ / {Math.floor(weather?.main.temp*1.8+32)}℉</h2>
      <h3 className="description">{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox