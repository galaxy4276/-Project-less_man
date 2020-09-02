import path from 'path';
import extractCSS from 'mini-css-extract-plugin';


const MODE = 'development';
const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "src", "public");


const webpacking = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    filename: "[name].js",
    path: OUTPUT_DIR,
    publicPath: OUTPUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: extractCSS.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new extractCSS({ filename: "styles.css" })
  ],
  devServer: {
    host: "127.0.0.1",
    contentBase: path.resolve(__dirname, "src", "public"),
    compress: true,
    hot: true,
    inline: true,
    port: 8000,
    open: true
  },
};

export default webpacking;