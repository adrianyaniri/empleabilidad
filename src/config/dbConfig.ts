import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get('database.host'),
  port: configService.get('database.port'),
  username: configService.get('database.username'),
  password: configService.get('database.password'),
  database: configService.get('database.database'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: configService.get('environment') == 'development',
  logging: configService.get('database.dbLog') == 'true',
});