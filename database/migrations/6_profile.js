'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profile', (table) => {
      table.increments('id').primary()
      table.string('name', 60).notNullable()
      table.dateTime('birth_date')
      table.string('cell', 45)
      table.string('pretense', 45)
      table.string('note', 255)
      table.integer('id_candidate_level').unsigned().references('id').inTable('candidate_level')
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
    })
  }

  down () {
    this.drop('profile')
  }
}

module.exports = ProfileSchema
