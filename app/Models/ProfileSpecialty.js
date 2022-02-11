'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileSpecialty extends Model {
    static get table () {
        return 'profile_specialty'
    }
    profile(){
        return this.belongsToMany('App/Models/Profile');
    }

    profile(){
        return this.belongsTo('App/Models/Profile', 'id_profile', 'id');
      }
    specialty(){
        return this.belongsTo('App/Models/Specialty', 'id_specialty', 'id');
    }
}

module.exports = ProfileSpecialty
