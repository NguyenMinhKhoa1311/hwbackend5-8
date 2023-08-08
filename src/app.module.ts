import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './auth/auth.middlware';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://map:13112002@cluster0.9cwrccp.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
