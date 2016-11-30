"use strict";

const server = require("./server");

const DEFAULT_PORT = 3000;

server.listen(process.env.PORT || DEFAULT_PORT);
