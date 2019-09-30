// api.js
const { create, defaults, rewriter, router } = require('json-server'); 

//import { create, defaults, rewriter, router } from 'json-server'; // this is teh import from json-server all the stuff we need to create jsons

const morgan = require('morgan'); // creates logs 
const rewrites = require('./routes.json') ; // create custom routes (turned off)

const server = create(); //create custom server instance
const apiEndpoints = router('db2.json');
// Deactivate the existing logger
const middlewares = defaults({ logger: false });

// Here we use our own logging format
server.use(morgan('combined', { colors: true }));

server.use(rewriter(rewrites));
server.use(middlewares);
server.use(apiEndpoints);

//export default server;
module.exports = {server};