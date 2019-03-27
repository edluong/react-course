import React from 'react';

//export default is ok with class but NOT with constants
export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){

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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}