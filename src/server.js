"use strict";

const url = require("url");
const http = require("http");
const httpProxy = require("http-proxy");

const vcapServices = JSON.parse(process.env.VCAP_SERVICES);
const kibanaUrl = url.parse(vcapServices.elk[0].credentials.kibanaUrl);

const addresses = [
  {
    host: kibanaUrl.hostname,
    port: kibanaUrl.port,
  },
];

const proxy = httpProxy.createServer();

const server = http.createServer((req, res) => {
  const target = { target: addresses.shift() };

  console.log("Proxy request to:", target);
  proxy.web(req, res, target);

  addresses.push(target.target);
});

module.exports = server;
