import * as http from "http";

export interface RouterOnHandler<HttpRequest = http.IncomingMessage, HttpResponse = http.ServerResponse> {
    (
        req?: HttpRequest,
        res?: HttpResponse,
        params?: {
            [key: string]: any
        },
        store?: any
    ): void;
}


export interface RouterInstance<HttpRequest = http.IncomingMessage, HttpResponse = http.ServerResponse> {
    on(method: string, path: string, opts?: any, handler?: RouterOnHandler, store?: any): void;
    off(method: string, path: string): void;
    off(methods: [string], path: string, handler: RouterOnHandler, store?: any): void;
    reset(): void;
    lookup(req: HttpRequest, res: HttpResponse): void;
    prettyPrint(): void;
    find(method: string, path: string, version?: any): void;

    get(path: string, handler: RouterOnHandler, store?: any): void;
    delete(path: string, handler: RouterOnHandler, store?: any): void;
    head(path: string, handler: RouterOnHandler, store?: any): void;
    patch(path: string, handler: RouterOnHandler, store?: any): void;
    post(path: string, handler: RouterOnHandler, store?: any): void;
    put(path: string, handler: RouterOnHandler, store?: any): void;
    options(path: string, handler: RouterOnHandler, store?: any): void;
    all(path: string, handler: RouterOnHandler, store?: any): void;
}