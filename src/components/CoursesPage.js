import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from 'react-router-dom';

// nema više .this scope-a kod svakog propa
function CoursesPage() {

    const [ courses, setCourses ] = useState([]);

    useEffect( () => {
        getCourses().then( _courses => setCourses(_courses));
    }, []); // [] zbog ovog se nece biti infinite loop

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