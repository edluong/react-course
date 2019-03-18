const appRoot = document.getElementById('app');


const app = {
    visible: false
}

const onShowDetail = () => {
    // if (app.visible){
    //     app.visible = false;
    // }else {
    //     app.visible = true;
    // }

    app.visible = !app.visible; //rewrite based on watching solution vid
    render();
};

const render = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetail}>
                {app.visible ? 'Hide' : 'Show'} details
            </button>
            <p>{app.visible && 'Hey. These are some details you can now see!'}</p>
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();