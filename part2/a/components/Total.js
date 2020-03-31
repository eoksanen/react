import React from 'react'

const Total = ({parts}) => {
 
        const total = parts.reduce((s, p) => console.log(s, p) || s + p.exercises, 0)
    

    return (
        <div>total of {total} exercises</div>
    )
}

export default Total