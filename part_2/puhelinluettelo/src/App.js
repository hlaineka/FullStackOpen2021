import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PersonsToShow = (persons, filterstr) => (
  persons.filter(obj => obj.name.toLowerCase().includes(filterstr.toLowerCase())))

const Person = ({person}) => (
    <p>{person.name} {person.number}</p>)

const NumberList = ({persons, filterstr}) => (
    PersonsToShow(persons, filterstr).map((person) => (
      <Person person={person} key={person.name}/>
    )))

const FilterForm = ({newFilter, handleFilter}) => (
  <div>filter shown with <input value={newFilter} onChange={handleFilter}/></div>
)

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => (
  <form onSubmit={addPerson}>
    <div>name: <input value={newName} onChange={handleNameChange}/></div>
    <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/db')
    .then(response => {
      setPersons(response.data.persons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (-1 === persons.findIndex(obj => obj.name === newName)){
      const personObject = {
        name: newName,
        number: newNumber,
      }
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
        })
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    setFilter('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <FilterForm newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <NumberList persons={persons} filterstr={newFilter} />
    </div>
  )

}

export default App
