import React, { useState } from 'react'

const PersonsToShow = (persons, filter) => (
  persons.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase())))

const Person = ({person}) => (
    <p>{person.name} {person.number}</p>)

const NumberList = ({persons, filter}) => (
    PersonsToShow(persons, filter).map((person) => (
      <Person person={person} key={person.name}/>
    )))

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (-1 === persons.findIndex(obj => obj.name === newName)){
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
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
      <div>filter shown with <input value={newFilter} onChange={handleFilter}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NumberList persons={persons} filter={newFilter} />
    </div>
  )

}

export default App
