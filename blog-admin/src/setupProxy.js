const { createProxyMiddleware } = require("http-proxy-middleware");
// console.log(1);
module.exports = function(app) {
    app.use(createProxyMiddleware('/admin', { target: 'http://127.0.0.1:7001' }));
  };