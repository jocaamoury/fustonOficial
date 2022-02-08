'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CandidateLevel extends Model {

    
    profile(){
        return this.belongsToMany('App/Models/Profile');
    }
}

module.exports = CandidateLevel
