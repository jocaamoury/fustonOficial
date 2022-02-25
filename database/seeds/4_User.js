'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserSeeder {
  async run () {
    await Database.table('users').insert(
      {
        id: 1,
        email: 'colaborador@fuston.com.br',
        password: '$2a$10$CcnedKnvHjOzrkqDwXaKFOt7vSkWKUoYGrIGsSoPpPZDt5XK6VUCC'
      }
    ),
    await Database.table('users').insert(
      {
        id: 2,
        email: 'gerente@fuston.com.br',
        password: '$2a$10$QpqDrX3tEpYLxcuFwT6EXOlG0hiijHHPMPii2EFeUDKLYcFRSM9YG'
      }
    )
  }
}

module.exports = UserSeeder
