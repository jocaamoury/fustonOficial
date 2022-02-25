'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialtyTypeSchema extends Schema {
  up () {
    this.create('specialty_type', (table) => {
      table.increments('id').primary()
      table.string('name', 60).notNullable()
      table.string('description', 255)
      table.string('active', 1).notNullable().defaultTo('S')
      table.timestamps()
    })
  }

  down () {
    this.drop('specialty_type')
  }
}

module.exports = SpecialtyTypeSchema
