"use strict";

const httpProxy = require("http-proxy");

const target = process.env.BACKEND_URL;
const proxy = httpProxy.createProxyServer({ 
  target: process.env.BACKEND_URL,
  secure: process.env.SKIP_SSL == 'true'
});

proxy.on("error", err => console.error(err));

proxy.listen(process.env.PORT || 3000);
