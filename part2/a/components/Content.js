import React from 'react';
import Part from './Part'

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

export default Content