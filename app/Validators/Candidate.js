'use strict'

class Candidate {

  get validateAll () {
    return true
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules () {
    return {
      name: 'required',
      birth_date: 'required',
      cell: 'required',
      pretense: 'required',
      id_candidate_level: 'required'
    }
  }


  get messages() {
    return{
      "name.required": "Informe o nome",
      "birth_date.required": "Informe a data de nascimento",
      "cell.required": "Informe o número de celular",
      "pretense.required": "Informe a pretensão",
      "id_candidate_level.required": 'Informe o id candidate level'
      
    }
  }


}

module.exports = Candidate
