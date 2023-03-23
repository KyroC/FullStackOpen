import { useState,useEffect } from 'react'
import axios from 'axios';
import Display from './components/Display';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    console.log("Effects")
    personService
    .getAll()
    .then(response => {
      setPersons(response)
    })
  }, [])
  const addPerson = (event) => {
    event.preventDefault();
    let duplicate = false;
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    persons.map(person => {
      if(personObject.name === person.name){
        alert(`${newName} is already added to phonebook`)
        duplicate = true;
      }}
      )
    if(duplicate === false) {
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('');
          setNewNumber('');
      })

    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange =(event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange}/>
      <h3>Add a new:</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h3>Numbers</h3>
      <Display persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App