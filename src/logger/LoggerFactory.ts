import WinstonLogger from "./WinstonLogger";
import NullLogger from "./NullLogger";
import { Logger } from './Logger';

interface CreateLoggerOptions {
    name: string;
}
export function createLogger(options: CreateLoggerOptions): Logger {
    if (options.name === 'winston') {
        return new WinstonLogger();
    } else {
        return new NullLogger();
    }
}