import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas'},
    { name: 'Ada Lovelace' },
    { name: 'Dan Abramov'},
    { name: 'Mary Poppendieck'}
  ]) 
  const [ newName, setNewName ] = useState('test')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    console.log(newName)
    console.log(persons.includes(newName))
    let d
    persons.map(person => {
      console.log(person.includes(newName))
    })
    setPersons(persons.concat(personObject))
    console.log(persons)
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
          name: <input type='text' value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> 
      {persons.map((person) => 
          <Contact person={person} />
        )}
      </ul>
      
    </div>
  )
}

export default App;
