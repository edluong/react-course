'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
//must have a single root tag to display; usually wrap with a wrapper div
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Ed Luong'
    ),
    React.createElement(
        'p',
        null,
        'Age: 27'
    ),
    React.createElement(
        'p',
        null,
        'Location: California'
    )
);

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo, appRoot);
