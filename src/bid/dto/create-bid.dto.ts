import { IsNumber, IsString } from 'class-validator';
import { Bid } from '../entities/bid.entity';

export class CreateBidDto extends Bid {
  @IsNumber()
  auctionId: number;
  @IsNumber()
  id: number;
  @IsString()
  name: string;
}
