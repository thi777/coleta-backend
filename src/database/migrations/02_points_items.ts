import * as Knex from "knex";

export async function up(knex: Knex): Promise<any>  {
  return knex.schema.createTable('points_items', function(table: any) {
    table.increments('id').primary(),
    table.integer('point_id').notNullable().references('id').inTable('points')
    table.integer('item_id').notNullable().references('id').inTable('items')
  })
}

export async function down(knex: Knex): Promise<any>{
    return knex.schema.dropTable('points_items')
}