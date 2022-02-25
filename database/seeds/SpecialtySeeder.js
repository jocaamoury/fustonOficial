'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SpecialtySeeder {
  async run () {

    // Mobile Skills
      await Database.table('specialty').insert(
        {
          name: 'Mobile',
          id_specialty_type: 5
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'Android Nativo',
          id_specialty_type: 5
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'IOS Nativo',
          id_specialty_type: 5
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'Flutter',
          id_specialty_type: 5
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'React Native',
          id_specialty_type: 5
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'Ionic',
          id_specialty_type: 5
        }
      ),

      await Database.table('specialty').insert(
        {
          name: 'NodeJS',
          id_specialty_type: 2
        }
      ),
        await Database.table('specialty').insert(
          {
            name: 'AdonisJS',
            id_specialty_type: 2
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'NextJS',
            id_specialty_type: 2
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'PrismaJS',
            id_specialty_type: 2
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'PassportJS',
            id_specialty_type: 2
          }
        ),

      await Database.table('specialty').insert(
        {
          name: 'Java',
          id_specialty_type: 2
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'PHP',
          id_specialty_type: 2
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'Phyton',
          id_specialty_type: 2
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'Go-Lang',
          id_specialty_type: 2
        }
      ),
      await Database.table('specialty').insert(
        {
          name: 'C Sharp',
          id_specialty_type: 2
        }
      ),

    //Front-End
        await Database.table('specialty').insert(
          {
            name: 'VueJS',
            id_specialty_type: 3
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'ReactJS',
            id_specialty_type: 3
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'Flutter WEB',
            id_specialty_type: 3
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'Bootstrap HTML5',
            id_specialty_type: 3
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'AndularJS',
            id_specialty_type: 3
          }
        ),

        await Database.table('specialty').insert(
          {
            name: 'AndularJS',
            id_specialty_type: 3
          }
        ),

    // Infra Estrutura
    await Database.table('specialty').insert(
      {
        name: 'AWS',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS Lambda',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS Ec2',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS RDS',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'FireBase',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase FireStore',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'FireBase RealTime',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase Functions',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase Crashlitcs',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Google Cloud',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Azure Cloud',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Atlassian Jira',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Atlassian Confluence',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Atlassian Bitbucket',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Git Flow',
        id_specialty_type: 4
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Git Básico',
        id_specialty_type: 4
      }
    )

  }
}

module.exports = SpecialtySeeder
