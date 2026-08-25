import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // removes properties that don't have decorators
      forbidNonWhitelisted: true, // throws error if extra properties are sent
      transform: true,            // automatically transforms payload to DTO class
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();