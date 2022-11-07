const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use('/arcgis', createProxyMiddleware({
  target: 'http://175.6.136.216:6080/',
  changeOrigin: true
}));

app.use('/', createProxyMiddleware({
  target: 'http://113.240.253.3:888/',
  changeOrigin: true
}));

const port = process.env.PORT || 80;

app.listen(port);