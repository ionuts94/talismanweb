import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <div className="form-input-container">
            <label className="form-label" for={props.id}>{props.lable}</label>
            <input id={props.id} type={props.type} />
        </div>
    )
}

export default FormInput
