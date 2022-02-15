'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Candidate extends Model {
    
    static boot () {
        super.boot()
    
    //Adicionando profile na busca principal.
     this.addGlobalScope(function (builder) {
       builder.with('profile')
     })
    }
    
    static get table () {
        return 'users'
    }
    userType(){
        return this.belongsTo('App/Models/UserType', 'id_user_type', 'id');
    }
    
    profile(){
        return this.hasMany('App/Models/Profile', 'id', 'user_id');
    }
}

module.exports = Candidate
