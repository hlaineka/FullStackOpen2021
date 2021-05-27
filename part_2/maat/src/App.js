import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountriesToShow = (countries, filterstr) => (
  countries.filter(obj => obj.name.toLowerCase().includes(filterstr.toLowerCase())))

const FilterForm = ({newFilter, handleFilter}) => (
  <div>Find countries <input value={newFilter} onChange={handleFilter}/></div>
)

const Countries = ({countries}) => (
  countries.map((country) => (<div key={country.name}>{country.name}</div>))
)

const Languages = ({languages}) => {
  console.log(languages)
  return (
  <div>
    <h3>Languages:</h3>
    <ul>{languages.map((language) => (<li key={language.name}>{language.name}</li>))}</ul>
  </div>
)}

const Country = ({country}) => {
  console.log(country)
  return(
  <div>
    <h1>{country.name}</h1>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <Languages languages={country.languages}/>
    <img src={country.flag} width="300"/>
  </div>
)}

const CountryList = ({countries, filterstr}) => {
  const filteredCountries = CountriesToShow(countries, filterstr)
  if (filteredCountries.length > 10)
    return (<div>Too many matches, specify another filter</div>)
  else if (filteredCountries.length > 1)
    return (<Countries countries={filteredCountries}/>)
  else if (filteredCountries.length === 1)
    return (<Country country={filteredCountries[0]}/>)
  else
    return (<p>No countries</p>)
}

function App() {
  const [ newFilter, setFilter ] = useState('')
  const [ countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  
  return (
      <div>
        <h1>Countries</h1>
        <FilterForm newFilter={newFilter} handleFilter={handleFilter}/>
        <CountryList countries={countries} filterstr={newFilter} />
      </div>
    )
  }
  
  export default App
