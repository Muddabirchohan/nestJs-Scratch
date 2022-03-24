import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    // @Get()
    // findAllItems(): Promise<User[]> {
    //     return this.userService.findAll()
    // }

    @Get(":id")
    findOne(@Param("id") id): Promise<User> {
        return this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() createItem: createUserDto): Promise<User> {
        return this.userService.createItem(createItem)
    }

    // @Delete(":id")
    // deletePost(@Param("id") id): Promise<Item> {
    //     return this.userService.deleteItem(id)
    // }

    // @Put(":id")
    // updatePost(@Body() createItem: createItemDto, @Param("id") id): Promise<Item> {
    //     return this.userService.updateItem(id,createItem)
    // }

}
