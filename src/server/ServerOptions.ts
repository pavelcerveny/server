import { RouterInstance } from "../router/Router";

export interface ServerOptions {

    setBaseURL(url: String): void;
    router: RouterInstance;
    run(): void;
}
