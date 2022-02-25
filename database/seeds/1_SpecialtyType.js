'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SpecialtyTypeSeeder {
  async run () {
    await Database.table('specialty_type').insert(
      {
        id: 1,
        name: 'FullStack'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        id: 2,
        name: 'Backend'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        id: 3,
        name: 'Front-end'
      }
    ),
    await Database.table('specialty_type').insert(
      {
        id: 4,
        name: 'DevOps'
      }
    )
    await Database.table('specialty_type').insert(
      {
        id: 5,
        name: 'Mobile'
      }
    )
  }
}

module.exports = SpecialtyTypeSeeder
