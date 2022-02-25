'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserSeeder {
  async run () {
    await Database.table('profile').insert(
      {
        id: 1,
        name: 'Colaborador 1',
        birth_date: "1991-05-05",
        cell: "91988033221",
        user_id: 1,
      }
    ),
    await Database.table('profile').insert(
      {
        id: 2,
        name: 'Gerente',
        birth_date: "1991-05-05",
        cell: "91988033221",
        user_id: 2,
      }
    )
  }
}

module.exports = UserSeeder
