import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly itemModel: Model<User>) { }

  async findOne(id: string): Promise<User | undefined> {
    return this.itemModel.findOne({ _id: id })
  }

  async createItem(user: User): Promise<User> {
    const newItem = new this.itemModel(user)
    return await newItem.save()
}


}