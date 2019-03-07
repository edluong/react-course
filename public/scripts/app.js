'use strict';

console.log('App.js is running!');

//create app object

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'

    //JSX - JavaScript XML
    //must have a single root tag to display; usually wrap with a wrapper div
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Andrew',
    age: 27,
    location: 'California'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(template, appRoot);
