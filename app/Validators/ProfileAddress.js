'use strict'

class ProfileAddress {
  get rules () {
    return {
      id_profile: 'required',
      id_address: 'required'
    }
  }


  get messages() {
    return{
      'id_profile.required': 'Informe o id_profile.',
      'id_address.required': 'Informe o id_address.'
    }
  }


}

module.exports = ProfileAddress
