import personService from '../services/persons'

const Display = (prop) => {
    if(prop.newSearch !== '') {
      return (
      prop.persons.filter(person => person.name.includes(prop.newSearch)).map(filteredPerson => 
        <div key={filteredPerson.id}> {filteredPerson.name} {filteredPerson.number} <button onClick={() => prop.deletePerson(filteredPerson)}>Delete</button></div>)
        )
      }else {
      return(
      prop.persons.map(person =>
        <div key={person.id}> {person.name} {person.number} <button onClick={() => prop.deletePerson(person)}>Delete</button></div>
      )
      )
    }
  }

export default Display;