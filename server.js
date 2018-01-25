var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new webpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})
server.app.get('*',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
server.listen(8080);