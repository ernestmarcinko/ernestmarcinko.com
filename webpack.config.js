const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const postcss  = require('postcss');
const cssnano  = require('cssnano');

module.exports = {
    entry: './src/site.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'site.js',
    },
  
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/*.css',
            to: './[name][ext]',
            transform: (content, path) => {
              return postcss([cssnano])
                .process(content, {
                  from: path,
                })
                .then((result) => {
                  return result.css;
                });
            },
          },
        ],
      }),
    ],
    
    watch: true,
  };