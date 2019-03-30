import React from 'react';

//stateless functional component
//deals with creating a functional component for Options to be displayed
//we are passing in an event because this will automatically bind() handleDeleteOption to "this"; es6 functionality
//We do not want to pass handleDeleteOption up to IndecisionApp but have it with the correct optionText
 const Option = (props) => (
        <div>
            {props.optionText}
            <button
                className="button button--link" 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
);


export default Option