import React, { useState } from 'react';
// import { Prompt } from 'react-router-dom';
import CouseForm from './CourseForm';
import * as courseAPI from '../api/courseApi';

// arrow function -> drugi nacin deklariranja function komponenti
const ManageCoursePage = props => {
    // debugger;
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    // function handleChange(event) {
    //     const updatedCourse = {...course, [event.target.name]: event.target.value};
    //     setCourse(updatedCourse);
    // }

    //short sintax - destructuring
    function handleChange({target}) {
        setCourse(
        {
            ...course, 
            [target.name]: target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        courseAPI.saveCourse(course).then( () => {
            props.history.push("/courses");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are you sure you want to leave?" />  alias to "CanDeactivateGuard" angular*/}
            <CouseForm course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    );
}

export default ManageCoursePage;