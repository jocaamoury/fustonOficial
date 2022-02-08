'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id').primary()
      table.string('email', 254).notNullable().unique()
      table.string('password', 255).notNullable()
      table.integer('id_user_type').unsigned().references('id').inTable('user_type').notNullable()
      table.string('active', 1).notNullable().defaultTo('S')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
