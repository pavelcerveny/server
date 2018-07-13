/// <reference types="node" />

declare module "find-my-way" {
    import * as http from 'http';
    import * as http2 from 'http2';

    export function Router<
        HttpServer extends (http.Server | http2.Http2Server) = http.Server,
        HttpRequest extends (http.IncomingMessage | http2.Http2ServerRequest) = http.IncomingMessage,
        HttpResponse extends (http.ServerResponse | http2.Http2ServerResponse) = http.ServerResponse
        >(opts?: RouterOptions): RouterInstance;

    interface RouterOptions<HttpRequest = http.IncomingMessage, HttpResponse = http.ServerResponse> {
        defaultRoute?(req: HttpRequest, res: HttpResponse): void;
        caseSensitive?: boolean;
        ignoreTrailingSlash?: boolean;
        maxParamLength?: number;
        allowUnsafeRegex?: boolean;
    }

    interface RouterOnHandler<HttpRequest = http.IncomingMessage, HttpResponse = http.ServerResponse> {
        (
            req?: HttpRequest,
            res?: HttpResponse,
            params?: {
                [key: string]: any
            },
            store?: any
        ): void;
    }

    interface RouterInstance<HttpRequest = http.IncomingMessage, HttpResponse = http.ServerResponse> {
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


}
