'use strict';

var appRoot = document.getElementById('app');

var app = {
    visible: false
};

var onShowDetail = function onShowDetail() {
    // if (app.visible){
    //     app.visible = false;
    // }else {
    //     app.visible = true;
    // }

    app.visible = !app.visible; //rewrite based on watching solution vid
    render();
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetail },
            app.visible ? 'Hide' : 'Show',
            ' details'
        ),
        React.createElement(
            'p',
            null,
            app.visible && 'Hey. These are some details you can now see!'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
