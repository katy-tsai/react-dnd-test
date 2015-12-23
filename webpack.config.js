var path = require('path');
module.exports = {
  entry:{
    index:'./public/js/index',
    dragSources:'./public/js/dragSources',
    singleTarget:'./public/js/singleTarget',
    multipleTarget:'./public/js/multipleTarget',
    test:'./public/js/test',
    sortable:'./public/js/sortable'
  },
  output:{
    path:path.join(__dirname,'public/build'),
    filename:'bundle-[name].js',
    publicPath:'/build/'
  },
  resolve:{
    extensions: ['', '.jsx', '.less', '.js', '.json']
  },
  module:{
  loaders:[
    {test:/\.css$/,loader:'style-loader!css-loader'},
    {test: /\.less$/,loaders: ['style', 'css', 'less']},
    {test:/\.js[x]?$/,exclude:/node_modules/,loader:'babel-loader',
    query: {
      presets: ['react', 'es2015','stage-0'],
      plugins: ['transform-runtime','syntax-decorators']
    }}
  ]
}
}
