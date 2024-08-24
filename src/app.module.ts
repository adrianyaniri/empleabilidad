import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfig } from './config/envConfig';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { PostulantesModule } from './modules/postulantes/postulantes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envSchema } from './config/envSchema';
import dbConfig from './config/dbConfig';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
      envFilePath: ['.env', '.env.development'],
      validationSchema: envSchema,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: undefined,
      inject: [ConfigService],
      useFactory: dbConfig
    }),
    AuthModule,
    UsuariosModule,
    EmpresasModule,
    PostulantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
