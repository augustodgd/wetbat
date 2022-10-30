import { NestFactory } from '@nestjs/core';
import SeederModule from './seeder.module';
import SeederService from './seeder.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);

  const seeder = appContext.get(SeederService);
  try {
    await seeder.seed();
    console.log('Seeding complete!');
  } catch (err) {
    console.error('Seeding failed!');
    throw err;
  } finally {
    appContext.close();
  }
}
bootstrap();
