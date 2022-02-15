'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SpecialtySeeder {
  async run () {
    await Database.table('specialty').insert(
      {
        name: 'Full Stack'
      }
    ),

    // Mobile Skills
    await Database.table('specialty').insert(
      {
        name: 'Mobile'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Android Nativo'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'IOS Nativo'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Flutter'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'React Native'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Ionic'
      }
    ),

    //Backend Skills
    await Database.table('specialty').insert(
      {
        name: 'Backend'
      }
    ),

    await Database.table('specialty').insert(
      {
        name: 'NodeJS'
      }
    ),
        await Database.table('specialty').insert(
          {
            name: 'AdonisJS'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'NextJS'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'PrismaJS'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'PassportJS'
          }
        ),

    await Database.table('specialty').insert(
      {
        name: 'Java'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'PHP'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Phyton'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Go-Lang'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'C Sharp'
      }
    ),

    //Front-End
    await Database.table('specialty').insert(
      {
        name: 'Front-end'
      }
    ),
        await Database.table('specialty').insert(
          {
            name: 'VueJS'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'ReactJS'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'Flutter WEB'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'Bootstrap HTML5'
          }
        ),
        await Database.table('specialty').insert(
          {
            name: 'AndularJS'
          }
        ),

        await Database.table('specialty').insert(
          {
            name: 'AndularJS'
          }
        ),


  
    // Infra Estrutura
    await Database.table('specialty').insert(
      {
        name: 'DevOps'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS Lambda'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS Ec2'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'AWS RDS'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'FireBase'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase FireStore'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'FireBase RealTime'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase Functions'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Firebase Crashlitcs'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Google Cloud'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Azure Cloud'
      }
    ),

    await Database.table('specialty').insert(
      {
        name: 'Atlassian Jira'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Atlassian Confluence'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Atlassian Bitbucket'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Git Flow'
      }
    ),
    await Database.table('specialty').insert(
      {
        name: 'Git Básico'
      }
    )

  }
}

module.exports = SpecialtySeeder
