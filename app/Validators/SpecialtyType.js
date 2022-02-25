'use strict'

class SpecialtyType {
  get rules () {
    return {
      name: 'required'
    }
  }


  get messages() {
    return{
      'name.required': 'Informe o name.'
    }
  }


}

module.exports = SpecialtyType
