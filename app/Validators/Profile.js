'use strict'

class Profile {
  get rules () {
    return {
      name: 'required',
      user_id: 'required',
    }
  }


  get messages() {
    return{
      'name.required': 'Informe o name.',
      'id_user.required': 'Associe o profile a um user.'
    }
  }


}

module.exports = Profile
