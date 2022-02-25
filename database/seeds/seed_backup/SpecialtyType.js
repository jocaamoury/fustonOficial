'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SpecialtyTypeSeeder {
  async run () {
    await Database.table('specialty_type').insert(
      {
        name: 'FullStack'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        name: 'Backend'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        name: 'Front-end'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        name: 'DevOps'
      }
    )
  }
}

module.exports = SpecialtyTypeSeeder
