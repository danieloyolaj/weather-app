import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const CardWeather = ({coords}) => {

  
  
const [weather, setWeather] = useState()
  
useEffect(() => {
    if(coords.lon){
        const APIKey = 'cc168e3cf13325ab591fbcceaff1373c'
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${APIKey}`
        axios.get(URL)
            .then(res => setWeather(res.data))
            .catch(err => console.log(err))
    }
}, [coords.lat, coords.lon])


  return (
    <div>
        <h1>The weather</h1>
      <p><b>Latitud: </b>{coords?.lat} </p>
      <p><b>Latitud: </b>{coords?.lon} </p>
    </div>
  )
}

export default CardWeather