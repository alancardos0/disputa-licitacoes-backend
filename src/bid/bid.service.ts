import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class BidService {
  constructor(private readonly prisma: PrismaService) {}

  async auctionBid(user: User, auctionId: number, amountValue: any) {
    const amount = amountValue.amount;
    const data = {
      auctionId: auctionId,
      id: user.id,
      name: user.name,
      email: user.email,
      amount: amount,
    };
    const createdAuctionBid = await this.prisma.bid.create({ data });
    return createdAuctionBid;
  }
}
