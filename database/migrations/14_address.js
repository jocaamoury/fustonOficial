'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('address', (table) => {
      table.increments('id').primary()
      table.string('country', 60).notNullable()
      table.string('state', 60).notNullable()
      table.string('city', 60).notNullable()
      table.string('street', 255).notNullable()
      table.string('zip_code', 60).notNullable()
      table.integer('id_address_type').unsigned().references('id').inTable('address_type').notNullable()
      table.string('active', 1).notNullable().defaultTo('S')
      table.timestamps()
    })
  }

  down () {
    this.drop('address')
  }
}

module.exports = AddressSchema
