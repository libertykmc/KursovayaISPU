import {Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import {UserService} from './user.service';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: 'Получить всех пользователей' })
    getUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить пользователя по id' })
    @ApiParam({ name: 'id', required: true, description:'Id пользователя' })
    getUserById(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Создать пользователя' })
    @ApiBody({schema:{example:{name: 'Ахмед', surname: 'Мамедов'}}})
    createUser(@Body() user: { name: string, surname: string }) {
        return this.userService.createUser(user.name, user.surname);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Обновить пользователя' })
    @ApiParam({ name: 'id', required: true, description:'Id пользователя' })
    @ApiBody({schema:{example:{name: 'Ахмед', surname: 'Мамедов'}}})
    updateUser(@Param('id') id: string, @Body() user: { name: string, surname: string }) {
       // return this.userService.update(+id, user);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить пользователя' })
    @ApiParam({ name: 'id', required: true, description:'Id пользователя' })
    removeUser(@Param('id') id: string) {
        return this.userService.delete(+id);
    }
}