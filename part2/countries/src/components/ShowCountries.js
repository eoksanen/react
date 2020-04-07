import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowCountries = ({filteredCountries, setFilter}) => {

   console.log('pituus on ', filteredCountries.length)
   

   if (filteredCountries.length < 10 && 1 < filteredCountries.length){

    console.log('infos',filteredCountries)
    return(
        <table>
        <thead>
          <tr>
            <td>
              Name:
            </td>
          </tr>
        </thead>
        <tbody>
        {filteredCountries.map((country, i) => 
          <ShowCountry key={i} country={country} setFilter={setFilter} />
        )}
        </tbody>
      </table> 
    )
        }
      
  else if (filteredCountries.length === 1){

        return(
            <ShowCountryInfo countryInfo={filteredCountries} />
        )

   }
    else
    {
        return(
        <table>
        <thead>
          <tr>
            <td>
              Please refine your search
            </td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table> 
        )}
}


const ShowCountry = ({country, setFilter}) => {
    return(
    <tr>
        <td>{country.name}</td>
        <td><button onClick={()=> setFilter(country.name)} >show</button></td>
    </tr>
    )
}

const ShowCountryInfo = ({countryInfo}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const api_key2 = process.env.REACT_APP_API_KEY2
    console.log('info',countryInfo)
    //const country = countryInfo[0]
    let weatherData = []
    const setWeatherData = (inputData) => weatherData = inputData
    const[saa, setSaa] = useState([])
    const[wind, setWind] = useState([])
    /*
    const getWeatherData = () => {

    axios.get('http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York')
    .then(respo => setWeatherData(respo.data)) 
    }
    useEffect(getWeatherData(),[])
    
    */

    const hook3 = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key2}&query=`+ countryInfo[0].capital).then(res => {
          console.log('promise fulfilled') 
          setWind(res.data.current) })}
      
          useEffect(hook3, [])

          console.log('render', saa, 'saas')
          
      
         const hook2 = () => {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ countryInfo[0].capital + '&appid='+ api_key +'&units=metric').then(res1 => {
              console.log('promise fulfilled') 
              console.log('wd1',res1.data)
              setSaa(res1.data.main) }
              )
            }
          
              useEffect(hook2, [])
              
              console.log('joo',saa)
              console.log('temp',saa.temp)

    return(
        <table>
        <thead>
          <tr>
            <td>
                <h3>{countryInfo[0].name}</h3>
            </td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    capital: {countryInfo[0].capital}
                </td>
            </tr>
            <tr>
            <td>
                poulation: {countryInfo[0].population}
            </td>
          </tr>
          <tr>
            <td>
                <h4>languages</h4>
            </td>
          </tr>
          <tr>
            <td>
                {countryInfo[0].languages.map(lang => <li key={lang.name}> {lang.name} </li> )}
            </td>
          </tr>
          <tr>
            <td>
                <h2>languages</h2>
            </td>
          </tr>
            <tr>
                <td>
                <img src={countryInfo[0].flag} className="flag" alt="flag" height="70" width="100" />
                </td>
            </tr>
            <tr>
            <td>
                <h2>Weather in {countryInfo[0].capital}</h2>
            </td>
          </tr>
          <tr>
            <td>
                temperature(openWeather) {saa.temp} Celsius
            </td>
          </tr>
          <tr>
            <td>
                windspeed {wind.wind_speed} kilometers/hour
             </td>
          </tr>
          <tr>
            <td>
            temperature(weatherstack) {wind.temperature} Celsius
            </td>
          </tr>
          <tr>
            <td>
            <img src={wind.weather_icons} className="flag" alt="flag" height="70" width="70" />
            </td>
          </tr>
        </tbody>
      </table> 

    )
}



export default ShowCountries