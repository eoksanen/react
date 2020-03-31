import React from 'react';
import './App.css';
import Note from './components/Note'
import Courses from './components/Courses'


function App({notes}) {
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


  return (
    <div>
      <Courses courses={courses} />
      <ul>
        {notes.map((note, i) => 
          <Note key={i} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App;
