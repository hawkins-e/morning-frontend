const proxy = require('http-proxy-middleware');

module.exports = function(app) {
//  app.use(
//    proxy("/api/*", { 
//           target: "http://localhost:5000/" 
//    })
//  )


  app.use(
     proxy("/bustime", {
          target:"http://ctabustracker.com",
          secure: false,
          changeOrigin:true,
      })
  )

  app.use(
    proxy("/api", {
         target:"http://lapi.transitchicago.com",
         secure: false,
         changeOrigin:true,
     })
 )

};