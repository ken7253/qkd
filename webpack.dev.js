import common from "./webpack.common.js";

process.env.NODE_ENV = 'development';

/**@type {import { webpack.Configuration } from "webpack";} */
const config = {
  mode: 'development',
  devtool: 'inline-source-map',

  ...common
}

export default config;