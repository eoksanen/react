import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
    return (
        <ul>
                {parts.map((part, i) => 
                <Part key={i} part={part} />
                )}
        </ul>

    )
}

export default Content