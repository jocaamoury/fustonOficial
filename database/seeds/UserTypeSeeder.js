'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserTypeSeeder {
  async run () {
    await Database.table('user_type').insert(
      {
        name: 'Administrador'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Colaborador'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Prestador'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Cliente'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Financeiro'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Gerente'
      }
    )
    await Database.table('user_type').insert(
      {
        name: 'Candidato'
      }
    )
  }
}

module.exports = UserTypeSeeder
