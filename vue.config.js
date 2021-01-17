var fs = require('fs');
var path = require('path')
module.exports = {
  productionSourceMap: false,
  outputDir: 'dist/',
  publicPath: '',
  lintOnSave: false,
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(path.join(__dirname, './cert/privatekey.pem')),
      cert: fs.readFileSync(path.join(__dirname, './cert/certificate.pem'))
    }
  }
}