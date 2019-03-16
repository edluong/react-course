console.log('App.js is running!');


//create app object

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); //stop full page refresh

    const option = e.target.elements.option.value;    //point to the event that started on. (event object)

    if (option){
        app.options.push(option);
        e.target.elements.option.value = ''; //reset the textbox to nothing again
        renderOptions(); //re - render the screen
    }
};

//remove all the elements from the options array in app
const onRemoveAll = () => {
    app.options.length = 0; //set the length of the array to 0; which will remove elements
    renderOptions();
};


const appRoot = document.getElementById('app');


const renderOptions = () => {
    //JSX - JavaScript XML
    //must have a single root tag to display; usually wrap with a wrapper div
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button> 
            </form>
        </div>
        );

    //render the template to the screen    
    ReactDOM.render(template,appRoot);
    
};

// render the template the first time
renderOptions();

