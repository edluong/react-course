import React from 'react';
import AddOption from './AddOption'; //webpack knows to look for .js files; can leave off .js
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = { // due to babel plugin 'transform class properties', do not need constructor and no need to assign with this
        options: [],
        selectedOption: undefined
    };

     //this method is to pass to the Options child so it can have access to IndecisionApps options array
     handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
        // using parenthesis before {}, we can return an object instead of undefined; syntax ({}) for arrow function
    };

    // method to pass down to Action Component child
    // pick an option for the computer to do
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
     };

    // do some validation on the input
    // make sure something was added
    // make sure it is not a duplicate item
     handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1) { 
            return 'This option already exists';
        }

        //set the state, adding a new array with the new option into the list of Options
        this.setState( (prevState) => ({options: prevState.options.concat(option) }));
    };

     //method to remove a singular option from the Options list
     handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) //if the option to remove is not equal to the option, then return false for the option
        }));
    };

    //method to clear the selectedOption to the default state
    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
 
    //life cycle method
    //can only access in class based components
    //fires when an event or when an instance is created
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            //look to see if options is not empty
            if (options) {
             this.setState(() => ({options}));
            }
        } catch(e){
            //do nothing if the json data is invalid
        }
    }

    //life cycle method
    //fires after the component update, when props or state changes
    //figuring out when a component's data changes
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options); //make a string representation of JSON
            localStorage.setItem('options', json); //localstorage can only hold strings
        }
    }

    //life cycle method
    //fires right before a component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
               <Header subtitle={subtitle} />
               <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                        />       
                    </div>      
               </div>
                 <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                 /> 
            </div>
        );
    }
}

export default IndecisionApp;