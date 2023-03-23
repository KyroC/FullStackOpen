import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    let duplicate = false;
    const personObject = {
      name: newName
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
    }
  }

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input  
                value= {newName}
                onChange={handleOnChange}
                />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {
        persons.map(person=> <div key={person.name}>{person.name}</div> )
        } 
    </div>
  )
}

export default App