import React, { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'

const PersonsToShow = (persons, filterstr) => (
  persons.filter(obj => obj.name.toLowerCase().includes(filterstr.toLowerCase())))

const Person = ({person, delPerson}) => (
    <p>{person.name} {person.number} <button onClick={(event) => delPerson(event, person.id)}>delete</button></p>)

const NumberList = ({persons, filterstr, delPerson}) => (
    PersonsToShow(persons, filterstr).map((person) => (
      <Person person={person} delPerson={delPerson} key={person.name}/>
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
    phonebookService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (-1 === persons.findIndex(obj => obj.name === newName)){
      const personObject = {
        name: newName,
        number: newNumber,
      }
      phonebookService
        .createPerson(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
      console.log("replace number of " + newName)
      const updatePerson = persons.find(obj => obj.name === newName)
      console.log(updatePerson)
      const updatedPerson = {...updatePerson, number: newNumber}
      phonebookService
        .updatePerson(updatedPerson)
          .then(() => phonebookService.getAll().then(newPersons => {setPersons(newPersons)}))
    }
    setNewName('')
    setNewNumber('')
    setFilter('')
  }

  const delPerson = (event, id) => {
    event.preventDefault()
    const toDelete = persons.find((obj) => obj.id===id)
    console.log("trying to delete id " + id + " info: " , toDelete)
    if (window.confirm("Delete " + toDelete.name)){
      console.log("delete" + toDelete.name)
      phonebookService
        .deletePerson(toDelete.id)
          .then(() => phonebookService.getAll().then(newPersons => {setPersons(newPersons)}))
    }
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
      <NumberList persons={persons} filterstr={newFilter} delPerson={delPerson}/>
    </div>
  )
}

export default App
