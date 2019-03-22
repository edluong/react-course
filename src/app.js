// const obj = {
//     name: 'Ed',
//     getName() {
//         return this.name;
//     }
// }

// //a common problem is losing this reference
// const getName = obj.getName.bind({name:'Edmund'}); //bind() is a useful method in where we get the in scope variables, such as name
//console.log(getName());

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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

    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
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
    
    //this is done to use bind() handleremove all. need to override react.component
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
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