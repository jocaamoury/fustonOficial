'use strict'

class ProfileSpecialty {
  get rules () {
    return {
      id_profile: 'required',
      id_specialty: 'required'
    }
  }


  get messages() {
    return{
      'id_profile.required': 'Informe o id_profile.',
      'id_specialty.required': 'Informe o id_specialty.'
    }
  }


}

module.exports = ProfileSpecialty
