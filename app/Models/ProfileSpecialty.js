'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileSpecialty extends Model {
    static boot () {
        super.boot()
    
    //Adicionando profile na busca principal.
     this.addGlobalScope(function (builder) {
       builder.with('specialty')
     })
    }
    static get table () {
        return 'profile_specialty'
    }

    profile(){
        return this.belongsTo('App/Models/Profile', 'id_profile', 'id');
      }
    specialty(){
        return this.belongsTo('App/Models/Specialty', 'id_specialty', 'id').select('id', 'name', 'description');
    }
}

module.exports = ProfileSpecialty
