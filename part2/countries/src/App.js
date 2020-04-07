import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import ShowContacts from './components/ShowCountries';

function App() {
  const[countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('')
  //const[saa, setSaa] = useState([])

  const hook = () => {
  axios.get('https://restcountries.eu/rest/v2/all').then(res => {
    console.log('promise fulfilled')
    setCountries(res.data) })}

    useEffect(hook, [])

    console.log('render', countries.length, 'countries')
/*
    const hook2 = () => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ 'helsinki' + '&appid='+ api_key ).then(res1 => {
        console.log('promise fulfilled') 
        console.log(res1.data)
        setSaa(res1.data) })}
    
        useEffect(hook2, [])

        console.log('render', saa.length, 'saas')
*/

    const handleFilter = (event) => {
      console.log('filter: ',event.target.value)
      setFilter(event.target.value)
    }

     const countriesFilter =() => {
      return (
      countries.filter(fl => {return fl.name.toLowerCase().includes(filter.toLowerCase())})
      )
    }

    const filteredCountries = countriesFilter()

  return (

      <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ShowContacts filteredCountries={filteredCountries} setFilter={setFilter} />
      </div>
      )
}

export default App;
