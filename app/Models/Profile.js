'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {
    static boot () {
        super.boot()
    
    //Adicionando profile na busca principal.
     this.addGlobalScope(function (builder) {
       builder.with('candidateLevel'),
       builder.with('profileSpecialty')
     })
    }
    static get table () {
        return 'profile'
    }
    user(){
        return this.hasOne('App/Models/User');
    }
    candidateLevel(){
        return this.belongsTo('App/Models/CandidateLevel', 'id_candidate_level', 'id').select('id', 'name', 'description');
    }
    profileSpecialty(){
        return this.hasMany('App/Models/ProfileSpecialty', 'id', 'id_profile').select('id_specialty', 'id_profile');
    }
}

module.exports = Profile
