import http2 from 'http2';
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import Router from 'find-my-way';
import { ServerOptions } from './ServerOptions';
import { Logger } from "../logger/Logger";
import { RouterInstance } from "../router/Router";


type RequestHandler = (request: IncomingMessage, response: ServerResponse) => void;
type ServerListenOptions = {
    port: number
};


export class HTTPServer implements ServerOptions {

    private baseURL: string;
    private server: Server;
    private port: number;
    protected logger: Logger;
    public static running: boolean = false;
    public router: RouterInstance;

    constructor(opts: ServerListenOptions, logger: Logger, routes?: RequestHandler) {

        let routing: RequestHandler;
        if (!routes) {
            this.router = Router();
            routing = this.router.lookup.bind(this.router);
        } else {
            routing = routes;
        }

        this.server = http.createServer(routing);
        this.logger = logger;
        this.port = opts.port;
    }

    public run() {

        this.server.listen(this.port, (err: Error) => {
            if (err) {
                this.logger.error('Server Error' + err);
            }

            HTTPServer.running = true;
            this.logger.info('Server Listening on port: ' + this.port);
        });
    }

    public setBaseURL(url: string) {
        this.baseURL = url;
    }
}
