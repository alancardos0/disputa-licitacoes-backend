import { Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuctionService {
  constructor(private readonly prisma: PrismaService) {}

  async createAuction(createAuctionDto: CreateAuctionDto) {
    const data = {
      ...createAuctionDto,
      endTime: new Date(Date.now() + 10 * 60 * 1000),
    };
    const createdAuction = await this.prisma.auction.create({ data });
    return {
      ...createdAuction,
      endTime: new Date(Date.now() + 10 * 60 * 1000),
    };
  }
}
