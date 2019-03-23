class VisibilityToggle extends React.Component {
    
    constructor(props){
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisiblity(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>{this.state.visibility ? 'Hide':'Show' } Details</button>
                <p>{this.state.visibility && 'Hey. These are some details you can now see!'}</p>
            </div>
            );
    }
};

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// const appRoot = document.getElementById('app');


// const app = {
//     visible: false
// }

// const onShowDetail = () => {
//     // if (app.visible){
//     //     app.visible = false;
//     // }else {
//     //     app.visible = true;
//     // }

//     app.visible = !app.visible; //rewrite based on watching solution vid
//     render();
// };

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetail}>
//                 {app.visible ? 'Hide' : 'Show'} details
//             </button>
//             <p>{app.visible && 'Hey. These are some details you can now see!'}</p>
//         </div>
//     );

//     ReactDOM.render(template,appRoot);
// };

// render();