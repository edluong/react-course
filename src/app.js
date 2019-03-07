console.log('App.js is running!');


//create app object

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}


//JSX - JavaScript XML
//must have a single root tag to display; usually wrap with a wrapper div
var template = (
<div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var user = {
    name: 'Andrew',
    age: 27,
    location: 'California'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1> 
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(template,appRoot); 
