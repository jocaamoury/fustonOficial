'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {

    static get table () {
        return 'profile'
    }

    candidateLevel(){
        return this.hasOne('App/Models/CandidateLevel');
    }

    user(){
        return this.hasOne('App/Models/User');
    }
}

module.exports = Profile
