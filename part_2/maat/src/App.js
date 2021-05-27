import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountriesToShow = (countries, filterstr) => (
  countries.filter(obj => obj.name.toLowerCase().includes(filterstr.toLowerCase())))

const FilterForm = ({newFilter, handleFilter}) => (
  <div>Find countries <input value={newFilter} onChange={handleFilter}/></div>
)

const Languages = ({languages}) => {
  console.log(languages)
  return (
  <div>
    <h3>Languages:</h3>
    <ul>{languages.map((language) => (<li key={language.name}>{language.name}</li>))}</ul>
  </div>
)}

const ShowButton = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

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

function App() {
  const [ newFilter, setFilter ] = useState('')
  const [ countries, setCountries] = useState([])
  const [ selectedCountry, setSelectedCountry] = useState(0)
  const [ filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
      setFilteredCountries(response.data)
    })
  }, [])

  const handleFilter = (event) => {
    setSelectedCountry(0)
    setFilter(event.target.value)
    setFilteredCountries(CountriesToShow(countries, event.target.value))
  }

  const CountryList = () => {
    if (selectedCountry)
      return (<Country country={selectedCountry}/>)
    if (filteredCountries.length > 10)
      return (<div>Too many matches, specify another filter</div>)
    else if (filteredCountries.length > 1)
      return (<Countries countries={filteredCountries}/>)
    else if (filteredCountries.length === 1)
      return (<Country country={filteredCountries[0]}/>)
    else
      return (<p>No countries</p>)
  }

  const Countries = () => (
    filteredCountries.map((country, index) => (<div key={country.name}>{country.name} <ShowButton handleClick={() => (setSelectedCountry(filteredCountries[index]))} text="show"/></div>))
  )
  
  return (
      <div>
        <h1>Countries</h1>
        <FilterForm newFilter={newFilter} handleFilter={handleFilter}/>
        <CountryList countries={filteredCountries} />
      </div>
    )
  }
  
  export default App
