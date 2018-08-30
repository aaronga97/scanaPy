// production config
const merge = require('webpack-merge');

const localProdConfig = require('./localProd');

module.exports = merge(localProdConfig, {
  output: {
    publicPath: 'https://jorgewebdeployment.blob.core.windows.net/rcssoccer/',
  },
});
