import React, { useState, useEffect } from 'react';
import './FormInput.css';

const FormInput = (props) => {
    useEffect(() => {
        const inputElem = document.getElementById(`${props.id}`);
        if (inputElem.value) {
            document.getElementById(`label-for-${props.id}`).classList.add('input-contains-value');
        } else {
            document.getElementById(`label-for-${props.id}`).classList.remove('input-contains-value')
        }
    }, [props.value])

    return (
        <div className="form-input-container">
            <label 
                id={`label-for-${props.id}`} 
                className="form-label" 
                htmlFor={props.id}
            >
                {props.lable}
            </label>

            <input 
                onChange={(e) => {
                    props.updateParent(e.target.value);
                }} 
                id={props.id} 
                type={props.type} 
                value={props.value}
            />
        </div>
    )
}

export default FormInput
