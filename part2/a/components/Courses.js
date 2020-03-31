import React from 'react';
import Course from './Course'

const Courses = ({courses}) => {
    return (
        courses.map((course, i) => 
            <Course key={i} course={course} />
        )   
    )
}

export default Courses;