import React, { useState, useEffect } from 'react';
import CourseList from "./CourseList";
import { Link } from 'react-router-dom';
import courseStore from '../stores/courseStore';
import { loadCourses } from '../actions/courseActions';

// nema više .this scope-a kod svakog propa
function CoursesPage() {

    const [ courses, setCourses ] = useState(courseStore.getCourses());

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange); // cleanup on unmount -> alias of ngOnDestroy()
    }, []); // [] zbog ovog se nece biti infinite loop
    
    function onChange() {
        setCourses(courseStore.getCourses());
    }

    return (
    <>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">
            Add Course
        </Link>
        <CourseList courses={courses}/>
    </>
    );
}

export default CoursesPage;