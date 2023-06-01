import { IsDate, IsString, isDate } from 'class-validator';
import { Auction } from '../entities/auction.entity';

export class CreateAuctionDto extends Auction {
  @IsString()
  description: string;
  @IsString()
  title: string;
}
