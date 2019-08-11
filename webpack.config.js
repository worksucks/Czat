const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

//webpack.config.js
module.exports = (env) => {

    const plugins = [];

    if (env === 'production') {
      plugins.push(
        new OptimizeJsPlugin({
          sourceMap: false
        }),
      )
    }

    plugins.push(
      new HtmlWebpackPlugin({
        template:'client/index.html',
        filename: 'index.html',
        inject: 'body'
      })
    )

    const environment = env || 'production';

    return {
      mode: environment,
      entry: './client/index.js',
      output: {
          path: path.resolve(__dirname, 'public'),
          filename: 'app.bundle.js'
      },
      module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
      },

      plugins:plugins
}

};
