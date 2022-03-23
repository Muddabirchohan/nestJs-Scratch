import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createItemDto } from './dto/create-post.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemSerivce: ItemsService) { }

    @Get()
    findAllItems(): Promise<Item[]> {
        return this.itemSerivce.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id): Promise<Item> {
        return this.itemSerivce.findById(id)
    }

    @Post()
    createPost(@Body() createItem: createItemDto): Promise<Item> {
        return this.itemSerivce.createItem(createItem)
    }

    @Delete(":id")
    deletePost(@Param("id") id): Promise<Item> {
        return this.itemSerivce.deleteItem(id)
    }

    @Put(":id")
    updatePost(@Body() createItem: createItemDto, @Param("id") id): Promise<Item> {
        return this.itemSerivce.updateItem(id,createItem)
    }

}
