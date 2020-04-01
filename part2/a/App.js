import React, { useState } from 'react';
import './App.css';
import Note from './components/Note'
import Courses from './components/Courses'


function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
        'add a new note'

  )
  const [showAll, setShowAll] = useState(true)
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
      {
        name: 'Java',
        exercises: 4,
        id: 5
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
const addNote = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
  const noteObject = {
    content: newNote,
    date: new Date().toISOString(),
    important: Math.random() > 0.5,
    id: notes.length + 1,
  }
  setNotes(notes.concat(noteObject))
  setNewNote('')
}
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

  return (
    
    <div>
      <Courses courses={courses} />
      <ul>
        {notesToShow.map((note, i) => 
          <Note key={i} note={note} />
        )}
      </ul>
        <button onClick={()=>setShowAll(!showAll)}>show {showAll ? 'important' : 'All'}</button>
      <form onSubmit={addNote}>
        <input
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App;
