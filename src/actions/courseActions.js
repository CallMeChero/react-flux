import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

// Action Creator
export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            // Action
            actionType: course.id 
            ? actionTypes.UPDATE_COURSE 
            : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    })
}

// Action Creator
export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        dispatcher.dispatch({
            // Action
            actionType: actionTypes.LOAD_COURSES,
            courses: courses
        });
    })
}