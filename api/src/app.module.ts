import { Module } from '@nestjs/common';
import DBConfigModule from './config/db/dbconfig.module';

import DomainModule from './domain/domain.module';

@Module({
  imports: [DomainModule, DBConfigModule],
})
export class AppModule {}
