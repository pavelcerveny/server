import { Logger, LogLevel } from './Logger';
import winston from 'winston';

export default class WinstonLogger implements Logger {

    private logger: winston.Logger;

    constructor() {

        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.json()
            ),
            transports: [new winston.transports.Console()]
        });
    }
    public log(level: string, message: string, context: any): void {
        this.logger.log(level, message, context);
    }

    public debug(message: string, context?: any): void {
        this.logger.debug(message, context);
    }

    public info(message: string, context?: any): void {
        this.logger.info(message, context);
    }

    public notice(message: string, context?: any): void {
        this.logger.notice(message, context);
    }

    public warning(message: string, context?: any): void {
        this.logger.warning(message, context);
    }

    public error(message: string, context?: any): void {
        this.logger.error(message, context);
    }

    public critical(message: string, context?: any): void {
        this.logger.crit(message, context);
    }

    public alert(message: string, context?: any): void {
        this.logger.alert(message, context);
    }

    public emergency(message: string, context?: any): void {
        this.logger.emerg(message, context);
    }
}