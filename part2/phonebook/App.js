import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddContact from './components/AddContact'
import ShowContacts from './components/ShowContacts'
import Filter from './components/Filter'

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
  const filteredContacts =() => {
    return (
    persons.filter(fl => {return fl.name.toLowerCase().includes(filter.toLowerCase())})
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add new</h2>
      <AddContact addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <ShowContacts filteredContacts={filteredContacts} />
    </div>
  )
}

export default App;
