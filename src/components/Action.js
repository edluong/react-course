import React from 'react'

//stateless functional component
//deals with the computer choosing which option to take
const Action = (props) => (
        <div>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
                </button>
        </div>
);


export default Action;
