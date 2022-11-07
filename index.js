const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://113.240.253.3:888/',
  changeOrigin: true
}));

app.listen(3000);