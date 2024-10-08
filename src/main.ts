import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get('port');

  await app.listen(PORT);
  console.log(`Sever http://localhost:${PORT}`);
  console.log(`Ambiente de trabajo: ${configService.get('environment')}`);

}
bootstrap();
