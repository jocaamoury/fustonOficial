'use strict'

class Address {
  get rules () {
    
    return {
      country: 'required',
      state: 'required',
      city: 'required',
      street: 'required',
      zip_code: 'required',
      id_address_type: 'required'
    }
  }


  get messages() {
    return{
      'country.required': 'Informe o country.',
      'state.required': 'Informe o state.',
      'city.required': 'Informe o city.',
      'street.required': 'Informe o street.',
      'zip_code.required': 'Informe o zip_code.',
      'id_address_type.required': 'Informe o id_address_type.'
    }
  }


}

module.exports = Address
