import React, { useState } from 'react'

const Person = ({person}) => (
    <p>{person.name}</p>
  )

const NumberList = ({persons}) => {
  return (
    persons.map((person) => (
      <Person person={person} key={person.name}/>
    ))
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (-1 === persons.findIndex(obj => obj.name === newName)){
      const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NumberList persons={persons} />
    </div>
  )

}

export default App
