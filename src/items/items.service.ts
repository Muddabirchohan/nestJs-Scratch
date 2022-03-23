import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from "mongoose";



@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }


    //because mongoose returns a promise so its async
    async findAll(): Promise<Item[]> {
        return this.itemModel.find();
    }

    //because mongoose returns a promise so its async
    async findById(id: string): Promise<Item> {
        return this.itemModel.findOne({ _id: id })
    }


    async createItem(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async deleteItem(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove({_id: id})
    }

    async updateItem(id: string, item :Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, {new:true})
    }





    // deleteById(id: string){
    //     return this.itemsList.find(item => item.id !== id)
    // }


}
