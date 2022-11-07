const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://175.6.136.216:6080/',
  changeOrigin: true
}));

const port = process.env.PORT || 80;

app.listen(port);