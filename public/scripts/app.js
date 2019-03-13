'use strict';

console.log('App.js is running!');

//create app object

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']

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

// const user = {
//     name: 'Ed',
//     age: 27,
//     location: 'California'
// };


// function getLocation(location) {
//     if (location){
//         return <p>Location: {location}</p>;
//     } //can return undefined but it implicilty returns undefined
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1> 
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )
var count = 0;

var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo, appRoot);
