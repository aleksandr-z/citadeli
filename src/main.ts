import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 8000;
  console.log('process.env', process.env.mode);
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  const config = new DocumentBuilder()
    .setTitle('Цитадели - настольная игра')
    .setDescription('REST API для игры')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/docs', app, document);
  await app.listen(port);
}
bootstrap();
