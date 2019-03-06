console.log('App.js is running!');


//JSX - JavaScript XML
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(template,appRoot); 
