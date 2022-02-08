'use strict'

class Profile {
  get rules () {
    return {
      name: 'required',
      id_candidate_level: 'required',
      id_user: 'required',
    }
  }


  get messages() {
    return{
      'name.required': 'Informe o name.',
      'id_candidate_level.required': 'Informe a senioridade do candidato.',
      'id_user.required': 'Associe o profile a um user.'
    }
  }


}

module.exports = Profile
