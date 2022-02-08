'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AddressType extends Model {

    address(){
        return this.belongsToMany('App/Models/Address');
    }
}

module.exports = AddressType
