import { resolve, join } from'path';
import { VueLoaderPlugin } from'vue-loader';
import HtmlWebpackPlugin from'html-webpack-plugin';
import MiniCssExtractPlugin from'mini-css-extract-plugin';
import { CleanWebpackPlugin } from'clean-webpack-plugin';
import webpack from 'webpack';

const ASSET_PATH = process.env.ASSET_PATH || '/';
const devMode=process.env.NODE_ENV !== 'production'
export default () => {
    return {
        
        entry: './src/app/index.js',
        output: {
            path: resolve(__dirname, 'src/public'),
            filename: 'js/[name].[contenthash].js',
            assetModuleFilename: 'assets/img/[hash][ext][query]',
            publicPath: ASSET_PATH,
        },
        resolve: {
            extensions: ['.js', '.vue']
        },
        module: {
            rules: [
                
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude:/node_modules/
                },
                {
                    test: /\.(js|jsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(html)?$/,
                    loader: 'html-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        devMode ?  "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                                additionalData: `@import "./src/app/assets/styles.scss";`
                            }
                        },
                        
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    exclude: /node_modules/,
                    type: 'asset/resource',
                    //useRelativePath:true
                },
                {
                    test: /\.pug$/,
                    exclude: /node_modules/,
                    loader: 'pug-plain-loader'
                },
                {
                    test: /\.(woff2?|ttf|otf|eot|svg)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts'
                        },
                    },
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: resolve(__dirname, './src/app/index.html'),
                ninify:{
                    collapseWhitespace:true,
                    removeComments:true,
                    removeRedundantAttributes:true,
                    removeScriptTypeAttributes:true,
                    removeStyleLinkAttributes:true,
                    useShortDoctype:true
                }
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "css/[id].css",
            }),
            new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
            }),
        ],
        devServer: {
            hot:true,
            host: '0.0.0.0',
            compress: true,
            port: 3000,
            historyApiFallback: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                      test: /[\\/]node_modules[\\/]/,
                      name: 'vendors',
                      chunks: 'all',
                    },
                },
            },
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
        },
        devtool: "source-map"
       
    };
};
