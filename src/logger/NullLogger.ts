import { Logger, LogLevel } from './Logger';

export default class NullLogger implements Logger {

    constructor() {}

    public log(level: string, message: string, context: any): void {
        return undefined;
    }

    public debug(message: string, context?: any): void {
        this.log(LogLevel.DEBUG, message, context);
    }

    public info(message: string, context?: any): void {
        this.log(LogLevel.INFO, message, context);
    }

    public notice(message: string, context?: any): void {
        this.log(LogLevel.NOTICE, message, context);
    }

    public warning(message: string, context?: any): void {
        this.log(LogLevel.WARNING, message, context);
    }

    public error(message: string, context?: any): void {
        this.log(LogLevel.ERROR, message, context);
    }

    public critical(message: string, context?: any): void {
        this.log(LogLevel.CRITICAL, message, context);
    }

    public alert(message: string, context?: any): void {
        this.log(LogLevel.ALERT, message, context);
    }

    public emergency(message: string, context?: any): void {
        this.log(LogLevel.EMERGENCY, message, context);
    }
}