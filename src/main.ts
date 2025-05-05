import "reflect-metadata";
import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger-ui/swagger.config';
 import { Logger } from 'nestjs-pino';

async function bootstrap(): Promise<any> {
const app: any = await NestFactory.create(AppModule, {
bufferLogs: true,
});
// app.useLogger (app.get(Logger));
setupSwagger (app);
await app. listen (3000);
}
bootstrap() ;