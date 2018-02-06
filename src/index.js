"use strict";

const httpProxy = require("http-proxy");

// Read Kibana credentials from VCAP_SERVICES
const vcapServices = JSON.parse(process.env.VCAP_SERVICES);
const target = vcapServices.elk[0].credentials.kibanaUrl;

const proxy = httpProxy.createProxyServer({ target });

proxy.on("error", err => console.error(err));

proxy.listen(process.env.PORT || 3000);
