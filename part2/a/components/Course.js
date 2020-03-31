import React from 'react';


const Course = ({course}) => {
    console.log(course.parts)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

const Header = ({name}) => {
    return (
    <h1>{name}</h1>
    )
}

const Content = ({parts}) => {
    const total = parts.reduce((s, p) => console.log(s, p) || s + p.exercises, 0)
    return (
        <ul>
                {parts.map((part, i) => 
                <Part key={i} part={part} />
                )}

            <div>total of {total} exercises</div>
        </ul>

    )
}

const Part = ({part}) => {
    return (
    <li>{part.name} {part.exercises}</li>
    )
}

export default Course;