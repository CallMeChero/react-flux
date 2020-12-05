import React from 'react';
import TextInput from './common/TextInput';
import PropTypes from 'prop-types';

function CourseForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            
            <TextInput
                id="title"
                label="Title"
                name="title"
                onChange={props.onChange}
                value={props.course.title}
                error={props.error.title}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        className="form-control"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        error={props.error.authorId}
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="1">Scott Allen</option>
                    </select>
                </div>
            </div>
            {props.error.authorId && (
                <div className="alert alert-danger">
                    {props.error.authorId}
                </div>
            )}

            <TextInput
                id="category"
                name="category"
                onChange={props.onChange}
                value={props.course.category}
                label="Category"
                error={props.error.category}
            />

            <input type="submit" value="Save" className="btn btn-primary" />

        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default CourseForm;