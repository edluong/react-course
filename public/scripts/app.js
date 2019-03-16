'use strict';

console.log('App.js is running!');

//create app object

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop full page refresh

    var option = e.target.elements.option.value; //point to the event that started on. (event object)

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; //reset the textbox to nothing again
        renderOptions(); //re - render the screen
    }
};

//remove all the elements from the options array in app
var onRemoveAll = function onRemoveAll() {
    app.options.length = 0; //set the length of the array to 0; which will remove elements
    renderOptions();
};

var appRoot = document.getElementById('app');

var renderOptions = function renderOptions() {
    //JSX - JavaScript XML
    //must have a single root tag to display; usually wrap with a wrapper div
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    //render the template to the screen    
    ReactDOM.render(template, appRoot);
};

// render the template the first time
renderOptions();
