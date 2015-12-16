var url = require('url')

var http = require('http');
var httpProxy = require('http-proxy');

var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
var kibanaUrl = url.parse(vcap_services.elk[0].credentials.kibanaUrl);

var addresses = [
  {
    host: kibanaUrl.hostname,
    port: kibanaUrl.port
  }
];

var proxy = httpProxy.createServer();

http.createServer(function (req, res) {
  var target = { target: addresses.shift() };

  console.log('balancing request to: ', target);
  proxy.web(req, res, target);

  addresses.push(target.target);
}).listen(process.env.PORT || process.env.VCAP_APP_PORT || 3000);
