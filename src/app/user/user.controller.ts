import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {UserService} from './user.service';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: 'Получить всех пользователей' })
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить пользователя по id' })
    @ApiParam({ name: 'id', required: true, description:'Id пользователя' })
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Создать пользователя' })
    @ApiBody({schema:{example:{name: 'Ахмед', surname: 'Мамедов'}}})
    createUser(@Body() user: { name: string, surname: string }) {
        return this.userService.createUser(user.name, user.surname);
    }

}