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
    name: 'Ed',
    age: 27,
    location: 'California'
};


function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;
    } //can return undefined but it implicilty returns undefined
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo,appRoot); 
