'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class AddressTypeSeeder {
  async run () {
    await Database.table('address_type').insert(
      {
        name: 'Residencial'
      }
    ),
    await Database.table('address_type').insert(
      {
        name: 'Comercial'
      }
    ),
    await Database.table('address_type').insert(
      {
        name: 'Secundario'
      }
    )
  }
}

module.exports = AddressTypeSeeder
