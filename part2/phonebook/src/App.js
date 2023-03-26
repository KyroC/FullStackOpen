import { useState,useEffect } from 'react'
import axios from 'axios';
import Display from './components/Display';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/persons.js'
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [addedMessage, setAddedMessage] = useState(null);

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
    console.log(personObject);
    persons.map(person => {
      if(personObject.name === person.name){
        alert(`${newName} is already added to phonebook`)
        duplicate = true;
      }}
      )
    if(duplicate === false) {
      axios
        .post('http://localhost:3001/api/persons', personObject)
        .then(response => {
          setAddedMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setAddedMessage(null)
          },5000)
          setPersons(persons.concat(response.data))
          setNewName('');
          setNewNumber('');
      })

    }
  }

  const deletePerson =(event)=> {
    var result = window.confirm(`Delete ${event.name}?`)
    if(result){
    personService
    .deleteService(event.id)
    .then(x => {
      setPersons(persons.filter(person => person.id !== event.id)
    )})
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
      <Notification message={addedMessage}/>
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
      <Display persons={persons} newSearch={newSearch} deletePerson ={deletePerson}/>
    </div>
  )
}

export default App