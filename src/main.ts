import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const key = admin.initializeApp({
    credential: admin.credential.cert('./homework5-8-key.json')
  });
  admin.messaging(key)
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
