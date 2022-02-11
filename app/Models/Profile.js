'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {

    static get table () {
        return 'profile'
    }
    user(){
        return this.hasOne('App/Models/User');
    }
    candidateLevel(){
        return this.belongsTo('App/Models/CandidateLevel', 'id_candidate_level', 'id');
      }
}

module.exports = Profile
