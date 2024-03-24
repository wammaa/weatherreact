import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const cities = ['London', 'Paris', 'Boston', 'Nagoya']
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b3e11d1082a03967d0dfda33d7a96e58&units=metric`
      let response = await fetch(url)
      let data = await response.json();
      setWeather(data)
      setLoading(false)
    } catch(err){
      alert('에러가 발생했습니다')
      setLoading(false)
    }
  }

  const getWeatherByCity = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3e11d1082a03967d0dfda33d7a96e58&units=metric`
      let response = await fetch(url)
      let data = await response.json()
      setWeather(data)
      setLoading(false)
    } catch(err){
      alert('에러가 발생했습니다')
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(city === ''){
      setLoading(true)
      getCurrentLocation()
    }else{
      setLoading(true)
      getWeatherByCity()
    }    
  },[city])

  return (
    <div>
      {loading?(
      <div className="container">
        <ClipLoader color="#f88c6b" loading={loading} size={150}/>
      </div>) : (
      <div className="container">
        <ClipLoader color="#f88c6b" loading={loading} size={150}/>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} city={city}/>
      </div>)}
      
    </div>
  );
}

export default App;
