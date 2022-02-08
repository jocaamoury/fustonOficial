'use strict'

class User {
  get rules () {
    return {
      email: 'required',
      password: 'required',
      id_user_type: 'required'
    }
  }


  get messages() {
    return{
      'email.required': 'Informe o email',
      'password.required': 'Informe o password',
      'id_user_type.required': 'Informe o id_user_type',
    }
  }


}

module.exports = User
