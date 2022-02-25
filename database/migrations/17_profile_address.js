'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileAddressSchema extends Schema {
  up () {
    this.create('profile_address', (table) => {
      table.increments('id').primary()
      table.integer('id_profile').unsigned().references('id').inTable('profile').notNullable()
      table.integer('id_address').unsigned().references('id').inTable('address').notNullable()
      table.string('active', 1).notNullable().defaultTo('S')
      table.timestamps()
    })
  }

  down () {
    this.drop('profile_address')
  }
}

module.exports = ProfileAddressSchema
