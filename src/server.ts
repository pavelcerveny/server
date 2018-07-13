import * as http from 'http';
import HTTPServerFactory from "./server/HTTPServerFactory";
import { Router } from 'find-my-way';


const server = HTTPServerFactory.createServer('http', false, true);
// server.start({port: 3000});

const router = Router();

router.get('/users/', (req: http.IncomingMessage, res: http.ServerResponse) => {

});