import common from "./webpack.common.js";

process.env.NODE_ENV = 'production';
/**@type {import { webpack.Configuration } from "webpack";} */
const config = {
  mode: 'production',
  ...common
};

export default config;