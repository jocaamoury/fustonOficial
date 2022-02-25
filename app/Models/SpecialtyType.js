'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SpecialtyType extends Model {
    static get table () {
        return 'specialty_type'
    }
    
    profile(){
        return this.belongsToMany('App/Models/Profile');
    }
}

module.exports = SpecialtyType
