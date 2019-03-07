console.log('App.js is running!');


//JSX - JavaScript XML
//must have a single root tag to display; usually wrap with a wrapper div
var template = (
<div>
    <h1>Indecision App</h1> 
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var templateTwo = (
    <div>
        <h1>Ed Luong</h1>
        <p>Age: 27</p>
        <p>Location: California</p>
    </div>
)

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo,appRoot); 
