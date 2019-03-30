import React from 'react';

//export default is ok with class but NOT with constants
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => { // using plugin transform-class-properties, no need to bind properties

        e.preventDefault(); //prevent fullpage refresh

        const option = e.target.elements.option.value.trim(); //get the value
        const error = this.props.handleAddOption(option);
        

        this.setState(() => ({error})); //returning an error object if found. identical statment to error: error

        //if there is invalid data, wipe the data
        if(!error){
            e.target.elements.option.value = '';
        }
     }
    
     //don't forget to have this in front of the method
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}