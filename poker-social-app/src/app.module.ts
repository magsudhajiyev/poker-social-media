import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/poker-social-app'),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController], // Only AppController should be here
  providers: [AppService],     // Only AppService should be here
})
export class AppModule {}
