"use strict";

const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({ process.env.BACKEND_URL });

proxy.on("error", err => console.error(err));

proxy.listen(process.env.PORT || 3000);
