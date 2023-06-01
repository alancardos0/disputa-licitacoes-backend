import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuctionModule } from './auction/auction.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { BidModule } from './bid/bid.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, AuctionModule, BidModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
