import path, { dirname , } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
export  default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(dirname(__filename), 'dist'),
    },
    module: {
       rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
       ],
    }
}