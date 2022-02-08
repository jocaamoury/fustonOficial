'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Specialty extends Model {

    profileSpecialty(){
        return this.belongsToMany('App/Models/ProfileSpecialty');
    }

}

module.exports = Specialty
