'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSpecialtySchema extends Schema {
  up () {
    this.create('profile_specialty', (table) => {
      table.increments('id').primary()
      table.integer('id_profile').unsigned().references('id').inTable('profile').notNullable()
      table.integer('id_specialty').unsigned().references('id').inTable('specialty').notNullable()
      table.string('active', 1).notNullable().defaultTo('S')
    })
  }

  down () {
    this.drop('profile_specialty')
  }
}

module.exports = ProfileSpecialtySchema
