import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, city}) => {
  return (
    <div className="button-box">
      <Button className={city === '' ? 'selected' : ''} onClick={()=>setCity('')}>Current Location</Button>
      {cities.map((item)=>(
        <Button className={city === item ? 'selected' : ''} onClick={()=>setCity(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton
	