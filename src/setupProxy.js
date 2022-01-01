const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5002',
      changeOrigin: true,
    })
  );
};

//REMOVED from package JSON because it breaks the app
// "proxy": "http://localhost:5002",

// Setup a contact form in React that sends email via Node.js
// https://w3collective.com/react-contact-form/

// Proxying API Requests in Development
// https://create-react-app.dev/docs/proxying-api-requests-in-development/