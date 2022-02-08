'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileAddress extends Model {

    
    profile(){
        return this.belongsToMany('App/Models/Profile');
    }

    address(){
        return this.belongsToMany('App/Models/Address');
    }
    
}

module.exports = ProfileAddress
