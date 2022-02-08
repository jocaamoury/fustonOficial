'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileSpecialty extends Model {

    profile(){
        return this.belongsToMany('App/Models/Profile');
    }

    profileSpecialty(){
        return this.belongsToMany('App/Models/ProfileSpecialty');
    }
}

module.exports = ProfileSpecialty
