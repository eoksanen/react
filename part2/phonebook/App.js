import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AddContact from './components/AddContact'
import ShowContacts from './components/ShowContacts'
import Filter from './components/Filter'
import personService from './services/contacts'

function App() {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Mari Poppen', number: '69-66-6666666', id: 5}
  ]) 
  const [ newName, setNewName ] = useState('Mickhael')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const hook = ()  => {
  
  personService.getAll().then(iPersons => {
    console.log('promise fulfilled') 
    setPersons(iPersons) })}

    useEffect(hook, [])

    console.log('render', persons.length, 'notes')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(persons.map(person => {return person.name}).indexOf(newName) > 0){
      console.log('test Index ',persons.map(p => {return p.name}).indexOf(newName))
    }
    if(persons.map(person => {return person.name}).indexOf(newName) < 0)
    {
 personService.create(personObject)
      .then(res => {
        setPersons(persons.concat(res))
        setNewName('')
        setNewNumber('')
        console.log(res)
      })}
      else{
        if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
          const prs = persons.find(p => p.name === newName)
          console.log(prs)
          personService.update(prs.id, personObject)
          .then(rPersons => {
            setPersons(persons.map(person => person.id !== prs.id ? person : rPersons))
          
        })}
        //alert(`${newName} is already added to the phonebook, replace the old number with a new one?`)

       }

  }

  const deletePersonOf = (id) => {
    const person = persons.find(c => c.id === id)
    console.log(`person ${id} needs to be deleted`)

    personService.deleteContact(id).catch(error => {alert(`this person ${person.name} number: ${person.number} id: ${person.id}' was already deleted from the server`)});
    
    setPersons(persons.filter(n => n.id !== id))
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
      <ShowContacts filteredContacts={filteredContacts} deletePersonOf={deletePersonOf} />
    </div>
  )
}

export default App;
