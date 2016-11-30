"use strict";

const url = require("url");
const http = require("http");
const httpProxy = require("http-proxy");
const winston = require("winston");

const vcapServices = JSON.parse(process.env.VCAP_SERVICES);
const kibanaUrl = url.parse(vcapServices.elk[0].credentials.kibanaUrl);
const address = {
  host: kibanaUrl.hostname,
  port: kibanaUrl.port,
};

const proxy = httpProxy.createServer();

const server = http.createServer((req, res) => {
  winston.info("Proxy request to:", address);
  proxy.web(req, res, { target: address });
});

module.exports = server;
