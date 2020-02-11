const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
     proxy("/bustime", {
          target:"http://ctabustracker.com",
          changeOrigin:true,
      })
  )

};