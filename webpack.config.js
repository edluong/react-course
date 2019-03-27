// core things to provide: entry -> output
//__dirname will provide the path to the root of the project
const path = require('path');

// node command module.exports
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

// loader
