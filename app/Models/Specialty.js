'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Specialty extends Model {
    static get table () {
        return 'specialty'
    }
    profileSpecialty(){
        return this.belongsToMany('App/Models/ProfileSpecialty', 'id_specialty', 'id');
    }

}

module.exports = Specialty
