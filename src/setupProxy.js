const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/contact'], {
      target: 'http://localhost:5002',
    })
  );
};
