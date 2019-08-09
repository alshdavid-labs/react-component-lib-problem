const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const mode = process.argv.includes('--prod') ? 'production' : 'development'
if (mode === 'production') {
    process.env.NODE_ENV="'production'"
}

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    mode,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'build'),
        library: '',
        libraryTarget: 'commonjs'   
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
};