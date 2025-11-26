import { Server } from "./server/server";
require('dotenv').config();
const server = new Server();

server.listen();