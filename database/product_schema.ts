import { BaseModel } from "@adonisjs/lucid/orm";
import { column } from "@adonisjs/lucid/orm";
import { DateTime } from "luxon";

export class ProductSchema extends BaseModel {
    static $columns = ['createdAt', 'fullName', 'price', 'id', 'updateAt'] as const 
      $columns = ProductSchema.$columns
      @column.dateTime({ autoCreate: true })
      declare createdAt: DateTime
      @column()
      declare fullname: string | null
      @column()
      declare price: number
      @column({ isPrimary: true })
      declare id: number
      @column.dateTime({ autoCreate: true, autoUpdate: true })
      declare updatedAt: DateTime | null
    }
    
