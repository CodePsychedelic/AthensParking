const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   output: {
      path: path.join(__dirname, "/dist"), 
      filename: "bundle.js", 
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "src/index.html", 
      }),
   ],
   devServer: {
      port: 5050, 
      historyApiFallback: {
         index: 'dist/index.html'
      }
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
         {
            test: /\.(sa|sc|c)ss$/, 
            use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
         },
         {
            test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
            loader: "url-loader",
            options: { 
               limit: false,
               name: 'assets/[name].[ext]',
            },
         },
      ],
   },
   resolve: {
      extensions: [".js", ".jsx"],
   },
};