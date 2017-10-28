import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { ValidatorPipe } from './pipes/validator.pipe';
import Log from './utils/Log';
// Used for TypeORM
import 'reflect-metadata';
// Import config
import { config } from 'dotenv';
// Request context
import 'zone.js';
import 'zone.js/dist/zone-node.js';
import 'zone.js/dist/long-stack-trace-zone.js';

async function bootstrap() {
  config();
  Log.init();

  const instance = express();
  instance.use(bodyParser.json());
  instance.use(cors());

  const app = await NestFactory.create(ApplicationModule, instance);
  app.useGlobalPipes(new ValidatorPipe());
  await app.listen(parseInt(process.env.API_PORT, 10));

  Log.info(`Application is listening on port ${process.env.API_PORT}.`);
}

bootstrap()
.catch(console.error);