import React, { useState } from 'react';
// import { Prompt } from 'react-router-dom';
import CouseForm from './CourseForm';
import * as courseAPI from '../api/courseApi';
import { toast } from 'react-toastify';

// arrow function -> drugi nacin deklariranja function komponenti
const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
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

    function formIsValid() {
        const _erorrs = {};

        if(!course.title) _erorrs.title = "Title is required";
        if(!course.authorId) _erorrs.authorId = "Author is required";
        if(!course.category) _erorrs.category = "Category is required";

        setErrors(_erorrs);
        // Form is valid if errors object has no properties
        return Object.keys(_erorrs).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!formIsValid()) return;
        courseAPI.saveCourse(course).then( () => {
            props.history.push("/courses");
            toast.success("Course saved");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are you sure you want to leave?" />  alias to "CanDeactivateGuard" angular*/}
            <CouseForm 
                error={errors}
                course={course} 
                onChange={handleChange} 
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default ManageCoursePage;