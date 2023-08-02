import express from "express";
import { Server, createServer } from "http";
import { Server as Io } from "socket.io";

export default class App {
  public app: express.Application;
  public server: Server;
  private socketIo: Io;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: "*",
      },
    });
  }
}
