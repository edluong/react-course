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
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

//first param is pass in template
//second param is where to render
ReactDOM.render(templateTwo,appRoot); 
};

renderCounterApp();