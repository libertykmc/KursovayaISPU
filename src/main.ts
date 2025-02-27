import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); //чтобы все маршруты начинались с api
  app.enableCors(); //чтобы можно было отправлять запросы из других доменов

  const config = new DocumentBuilder()
    .setTitle('Kursovaya API')
    .setDescription('Тестим API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);



}
bootstrap();


