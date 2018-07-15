import { ServerOptions } from "./ServerOptions";
import { HTTPServer } from "./HTTPServer";
import { createLogger } from '../logger/LoggerFactory';
import { Logger } from "../logger/Logger";

export default class HTTPServerFactory {
    public static createServer(type: string = 'http', https: boolean = false, logger: boolean = false): ServerOptions {
        const loggerInstance: Logger = createLogger({ name: 'winston'});
        if (type === 'http') {
            if (!https) {
                return new HTTPServer({ port: 3000 }, loggerInstance);
            }
        }
    }
}