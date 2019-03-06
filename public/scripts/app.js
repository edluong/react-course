'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(template, appRoot);
