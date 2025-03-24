import {Module} from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './app/user/entities/user.entity';
import { env } from 'process';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            imports: [],
            useFactory: () => ({
            type: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [UserEntity],
            synchronize: true}),
        }),

        UserModule],
})
export class AppModule {}