'use strict'

class Specialty {
  get rules () {
    return {
      name: 'required',
      id_specialty_type: 'required'
    }
  }


  get messages() {
    return{
      'name.required': 'Informe o name.',
      'id_specialty_type.required': 'Informe o id_specialty_type.'
      
    }
  }


}

module.exports = Specialty
