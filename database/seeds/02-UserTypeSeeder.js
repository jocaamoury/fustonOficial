'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class UserTypeSeeder {
  async run () {
    await Database.table('user_type').insert(
      {
        name: 'Administrador',
        path: 'admin'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Colaborador',
        path: 'colaborador'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Prestador',
        path: 'prestador'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Cliente',
        path: 'cliente'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Financeiro',
        path: 'financeiro'
      }
    ),
    await Database.table('user_type').insert(
      {
        name: 'Gerente',
        path: 'gerente'
      }
    )
    await Database.table('user_type').insert(
      {
        name: 'Candidato',
        path: 'candidato'
      }
    )
  }
}

module.exports = UserTypeSeeder
