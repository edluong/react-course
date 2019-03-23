class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one','Thing two','Thing three']
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

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />  
            </div>
        );
    }
}


class Header extends React.Component {
    //must define render from a React Component
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
}


class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class Options extends React.Component {
    
  
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                  this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
            );
    }
}

class AddOption extends React.Component {
    
    handleAddOption(e){

        e.preventDefault(); //prevent fullpage refresh
 
        const option = e.target.elements.option.value.trim(); //get the value
 
        if (option){
            alert(option);
            e.target.elements.option.value = '';
        }
     }
    
     //don't forget to have this in front of the method
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));