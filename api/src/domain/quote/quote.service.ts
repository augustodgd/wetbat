import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Quote from './quote';
import QuoteEntity from './quote.entity';

@Injectable()
export default class QuoteService {
  @InjectRepository(QuoteEntity)
  private quoteRepository: Repository<QuoteEntity>;

  listAll(): Promise<Quote[]> {
    return this.quoteRepository.find({
      relations: {
        departure: true,
        destination: true,
        transportation: true,
      },
    });
  }

  getById(id: string): Promise<Quote | null> {
    return this.quoteRepository.findOne({
      where: { id },
      relations: {
        departure: true,
        destination: true,
        transportation: true,
      },
    });
  }

  create(quote: Quote): Promise<Quote> {
    return this.quoteRepository.save(quote);
  }
}
