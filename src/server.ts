import * as http from 'http';
import HTTPServerFactory from "./server/HTTPServerFactory";
import FindMyWay from 'find-my-way';
import { ServerOptions } from "./server/ServerOptions";
import { IncomingMessage, ServerResponse } from "http";

/*const defaultRequestHandler = (request: IncomingMessage, response: ServerResponse) => {
    const { headers, method, url } = request;
    if (method.toLowerCase() === 'get') {

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url };

        response.write(JSON.stringify(responseBody));
        response.end();
    }
};*/

const server: ServerOptions = HTTPServerFactory.createServer('http', false, true);

const router = server.router;
router.get('/', (req: http.IncomingMessage, res: http.ServerResponse) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify("successful"));
    res.end();
});
router.get('/users/', (req: http.IncomingMessage, res: http.ServerResponse) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify("successful"));
    res.end();
});

server.run();
