import * as Knex from "knex";

export async function up(knex: Knex): Promise<any>  {
  return knex.schema.createTable('points', function(table: any) {
    table.increments('id').primary(),
    table.string('image').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.decimal('whatsapp').notNullable()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

export async function down(knex: Knex): Promise<any>{
    return knex.schema.dropTable('points')
}
