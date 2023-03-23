const Display = (prop) => {
    if(prop.newSearch !== '') {
      return (
      prop.persons.filter(person => person.name.includes(prop.newSearch)).map(filteredPerson => 
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

export default Display;