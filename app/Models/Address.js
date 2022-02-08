'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {

    addressType(){
        return this.hasOne('App/Models/AddressType');
    }
}

module.exports = Address
