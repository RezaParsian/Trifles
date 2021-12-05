// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass("resources/sass/app.sass", "public/css");


// mix.webpackConfig({
//     externals: {
//         "jquery": "jQuery",
//     }
// });