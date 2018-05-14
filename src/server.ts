import { HTTPServer } from './server/HTTPServer';

const server = new HTTPServer();

server.start({port: 3000});
