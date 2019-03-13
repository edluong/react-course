console.log('App.js is running!');


//create app object

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One','Two']
}

//JSX - JavaScript XML
//must have a single root tag to display; usually wrap with a wrapper div
const template = (
<div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
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
let count = 0;

const addOne = () =>{
    console.log('addOne');
};

const minusOne = () =>{
    console.log('minusOne');
}

const reset = () =>{
    console.log('reset');
}


const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo,appRoot); 
