import http, {IncomingMessage, Server, ServerResponse} from 'http';
import winston from 'winston';

import {IServer} from "./IServer";

type RequestHandler = (request: IncomingMessage, response: ServerResponse) => void;
type ServerListenOptions = {
    port: number
};


export class HTTPServer implements IServer{

    private baseURL: string;
    private server: Server;

    public setBaseURL(url: string) {
        this.baseURL = url;
    }

    /**
     *
     * @param {RequestHandler} requestHandler contains Routes
     * @param {ServerListenOptions} options
     */
    public start(options: ServerListenOptions, requestHandler?: RequestHandler) {

        const defaultRequestHandler = (request: IncomingMessage, response: ServerResponse) => {
            const { headers, method, url } = request;
            if (method.toLowerCase() === 'get') {

                response.statusCode = 200;
                response.setHeader('Content-Type', 'application/json');

                const responseBody = { headers, method, url };

                response.write(JSON.stringify(responseBody));
                response.end();
            }
        };

        if (!requestHandler) {
            requestHandler = defaultRequestHandler;
        }

        this.server = http.createServer(requestHandler);
        this.server.listen(options, (err: Error) => {
            if (err) {
                winston.error('Server Error' + err);
            }
            winston.info('Server Listening on port: ' + options.port);
        });
    }
}
