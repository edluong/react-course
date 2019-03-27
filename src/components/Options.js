import React from 'react';
import Option from './Option';

//stateless functional component
// manages the removes all button
// lists out all of the Options
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
              props.options.map((option) => ( 
              <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
              />
              ))
            }
        </div>
        );
};

export default Options;
