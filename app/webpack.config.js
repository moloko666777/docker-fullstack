const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        path: __dirname + '/',
        filename: 'server.js',
        publicPath: '/'
    },
    mode: process.env.APP_ENV || 'development',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 500
    }
}