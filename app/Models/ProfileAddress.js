'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileAddress extends Model {

    static get table () {
        return 'profile_address'
    }
    
    profile(){
        return this.belongsTo('App/Models/Profile', 'id_profile', 'id');
    }

    address(){
        return this.belongsTo('App/Models/Address', 'id_address', 'id');
    }
    
}

module.exports = ProfileAddress
