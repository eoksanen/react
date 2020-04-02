import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('test')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log(newName)
    console.log(persons.includes(newName))
    persons.map(person => {
      console.log(person.name ===newName)
    })
    
    if(persons.map(person => {return person.name}).indexOf(newName) < 0)
    {
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
   else{
     alert(`${newName} is already added to the phonebook`)
    } 
  }

  const handleNameChange = (event) => {
    console.log('name: ', event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log('number: ',event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    console.log('filter: ',event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Filter: <input value={filter} onChange={handleFilter} />
      </form>
      <h2>add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <table>
        <thead>
          <tr>
            <td>
              Name:
            </td>
            <td>
              Number:
            </td>
          </tr>
        </thead>
        <tbody>
        {persons.map((person, i) => 
          <Contact key={i} person={person} />
        )}
        </tbody>
      </table> 
      <h2>Filtered contacts</h2>
      <table>
        <thead>
          <tr>
            <td>
              Name:
            </td>
            <td>
              Number:
            </td>
          </tr>
        </thead>
        <tbody>
        {
        persons.filter(fl => {return fl.name.toLowerCase().includes(filter.toLowerCase())}).map((person, i) => 
          <Contact key={i} person={person} />
        )}
        </tbody>
      </table>   
    </div>
  )
}

export default App;
