import path from 'path';

/**@type {import { webpack.Configuration } from "webpack";} */
const common = {
  entry: {
    main: path.resolve('src', 'main.tsx'),
    background: path.resolve('src', 'background.ts'),
    // content: path.resolve('src', 'content.ts'),
  },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: { extensions: ['.js', '.ts', '.tsx', '.json'], modules: ['node_modules'] },
};

export default common;