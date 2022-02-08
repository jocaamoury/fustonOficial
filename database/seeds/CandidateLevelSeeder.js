'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class CandidateLevelSeeder {
  async run () {
    await Database.table('candidate_level').insert(
      {
        name: 'Junior'
      }
    ),
    await Database.table('candidate_level').insert(
      {
        name: 'Pleno'
      }
    ),
    await Database.table('candidate_level').insert(
      {
        name: 'Senior'
      }
    ),
    await Database.table('candidate_level').insert(
      {
        name: 'Especialista'
      }
    )
  }
}

module.exports = CandidateLevelSeeder
