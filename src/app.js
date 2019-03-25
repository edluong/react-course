class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    //this method is to pass to the Options child so it can have access to IndecisionApps options array
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    
    // method to pass down to Action Component child
    // pick an option for the computer to do
    handlePick() {
       const randomNum = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randomNum];
       alert(option);
    }

    handleAddOption(option){
        
        // do some validation on the input
        // make sure something was added
        // make sure it is not a duplicate item
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1) { 
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                 />  
            </div>
        );
    }
}

// setting the default options to have nothing if no props are provided
IndecisionApp.defaultProps = {
    options: []
};

//stateless functional component
// Display the title and subtitle
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//default props
//this can be used after creating the object
Header.defaultProps = {
    title: 'Indecision'
};

//stateless functional component
//deals with the computer choosing which option to take
const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};

//stateless functional component
//deals with creating a functional component for Options to be displayed
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

//stateless functional component
// manages the removes all button
// lists out all of the Options
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
              props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
        );
};

class AddOption extends React.Component {
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
        
        this.setState(() => {
            return { error }; //identical to error: error
        });

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


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));