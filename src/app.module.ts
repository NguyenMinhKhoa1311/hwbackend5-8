import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://map:13112002@cluster0.9cwrccp.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
