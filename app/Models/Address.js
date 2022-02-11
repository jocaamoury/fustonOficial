'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    static get table () {
        return 'address'
    }
    addressType(){
        return this.belongsTo('App/Models/AddressType', 'id_address_type', 'id');
      }
}

module.exports = Address
