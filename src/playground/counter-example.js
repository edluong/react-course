 class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {   //setting up the default state
            count: 0
        };
    }
    
    //call setstate when rendering
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        //only run statement if count is a number
        if(!isNaN(count)){
            this.setState(() => ({count}));
        }

    }

    //save the count value whenever there is a change into localstorage
    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne(){
        //used because we do not manually update such as this.state.count = this.state.count + 1
        //should use the method setState
        //prevState is a function parameter. Can be named anything; functionally everyone names it prevState
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 //this return statement is only updating the values given; returning an object
            }; 
        });   
    };

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        //will give unexpected results, if not passing in a function. Adds 1 when called
        //setState is asynchronous
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    };
    
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
 };
 
 ReactDOM.render(<Counter />,document.getElementById('app'));



// // const user = {
// //     name: 'Ed',
// //     age: 27,
// //     location: 'California'
// // };


// // function getLocation(location) {
// //     if (location){
// //         return <p>Location: {location}</p>;
// //     } //can return undefined but it implicilty returns undefined
// // }

// // const templateTwo = (
// //     <div>
// //         <h1>{user.name ? user.name : 'Anonymous'}</h1> 
// //         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //         {getLocation(user.location)}
// //     </div>
// // )
// let count = 0;

// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

// //first param is pass in template
// //second param is where to render
// ReactDOM.render(templateTwo,appRoot); 
// };

// renderCounterApp();