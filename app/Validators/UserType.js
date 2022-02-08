'use strict'

class UserType {
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

module.exports = UserType
