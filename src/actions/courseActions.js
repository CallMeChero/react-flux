import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

// Action Creator
export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            // Action
            actionType: actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    })
}