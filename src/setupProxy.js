const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/api", {
        target: "http://localhost:5000",
        pathRewrite: {
            '^/api':'' //remove /service/api
        }
    }));
};
