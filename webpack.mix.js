// webpack.mix.js

let mix = require('laravel-mix')

mix.js('src/app.js', 'dist').js('src/scripts.js', 'dist').setPublicPath('dist')
