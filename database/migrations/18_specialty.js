'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialtySchema extends Schema {
  up () {
    this.create('specialty', (table) => {
      table.increments('id').primary()
      table.string('name', 60).notNullable()
      table.string('description', 255)
      table.integer('id_specialty_type').unsigned().references('id').inTable('specialty_type').notNullable()
      table.string('active', 1).notNullable().defaultTo('S')
      table.timestamps()
    })
  }

  down () {
    this.drop('specialty')
  }
}

module.exports = SpecialtySchema
