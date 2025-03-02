import {Module} from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './app/user/entities/user.entity';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1',
            database: 'kursach',
            entities: [User],
            synchronize: true
        }),

        UserModule],
})
export class AppModule {}