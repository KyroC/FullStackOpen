import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  const Display = (prop) => {
    if(newSearch !== '') {
      return (
      prop.persons.filter(person => person.name.includes(newSearch)).map(filteredPerson => 
        <div key={filteredPerson.id}> {filteredPerson.name} {filteredPerson.number}</div>)
        )
      }else {
      return(
      prop.persons.map(person =>
        <div key={person.id}> {person.name} {person.number}</div>
      )
      )
    }
  }
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
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
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
      <form>
        <div>filter shown with a <input onChange={handleSearchChange}></input>
        </div>
      </form>
      
      <form onSubmit={addPerson}>
        <h2>Add a new:</h2>
        <div>
          name: <input  
                value= {newName}
                onChange={handleNameChange}
                />
        </div>
        <div>number: <input 
                      value ={newNumber}
                      onChange={handleNumberChange}/>
        
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display persons={persons}/>
    </div>
  )
}

export default App