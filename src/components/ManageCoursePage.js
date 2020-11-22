import React from 'react';
// import { Prompt } from 'react-router-dom';

// arrow function -> drugi nacin deklariranja function komponenti
const ManageCoursePage = props => {
    // debugger;
    return (
        <>
            <h2>Manage Course</h2>
            {/* <Prompt when={true} message="Are you sure you want to leave?" />  alias to "CanDeactivateGuard" angular*/}
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;