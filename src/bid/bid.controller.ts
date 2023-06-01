import { Body, Controller, Param, Post } from '@nestjs/common';
import { BidService } from './bid.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('bid')
export class BidController {
  constructor(private readonly bidService: BidService) {}
  @Post(':auctionId/bids')
  auctionBid(
    @CurrentUser() user: User,
    @Param('auctionId') auctionId: number,
    @Body() amount: any,
  ) {
    return this.bidService.auctionBid(user, auctionId, amount);
  }
}
