import { path, getDirName } from './server.config.mjs';
import {default as CopyWebpackPlugin} from 'copy-webpack-plugin';
import {default as cssnano} from 'cssnano';
import { default as postcss } from 'postcss';

const __dirname = getDirName(import.meta.url);

export default [{
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
},
{
  entry: './src/flappybird.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'flappybird.js',
  },
},
{
  entry: './src/htmx-serverless.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'htmx-serverless.js',
  },
}
];