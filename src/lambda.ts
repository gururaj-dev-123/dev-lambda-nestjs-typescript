 import "reflect-metadata";
import { Handler } from "aws-lambda";
import express from 'express';
import { NestFactory } from '@nestjs/core/nest-factory';
import { ExpressAdapter } from '@nestjs/platform-express' ;
import { Server } from 'http';
import { AppModule } from "./app.module";
import * as awsServerlessExpress from 'aws-serverless-express';
import { Logger } from "@nestjs/common";

const server = express();
 async function bootstrap(): Promise<any> {
const app = await NestFactory.create(AppModule, new ExpressAdapter (server));
app. enableCors ();
await app.init();
return awsServerlessExpress.createServer(server);
 }
let cachedServer: Server;
 export const handler: Handler = async (event, context) =>{
if (event.warmer) {
Logger. log( 'Warming function');
return { statuscode: 200, body: "Warmed" };
}
if (!cachedServer) {
    cachedServer = await bootstrap();
}
return awsServerlessExpress.proxy (cachedServer, event, context, 'PROMISE'). promise;
} ;
