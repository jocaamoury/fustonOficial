'use strict'
const SpecialtyType = use('App/Models/SpecialtyType')

class SpecialtyTypeController {
    async index(){
        const specialtyType = await SpecialtyType.all()
        return specialtyType
    }

    async show({ params }){
        const specialtyType = await SpecialtyType.findOrFail(params.id)
        await specialtyType.loadMany(['specialty'])
        return specialtyType
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'name',
          'description'
        ])
    
        const specialtyType = await SpecialtyType.create(data)

        await specialtyType.loadMany()
        return specialtyType
    }

    async update({ params, request }){
        const specialtyType = await SpecialtyType.findOrFail(params.id)
        const { ...data } = request.only([
            'name',
            'description'
        ])
    specialtyType.merge(data)
    await specialtyType.save()

    await specialtyType.loadMany()
    return specialtyType
    }

    async destroy({ params }){
        const specialtyType = await SpecialtyType.findOrFail(params.id)
        await specialtyType.delete()
        return "Tipo de Especialidade deletado com sucesso!"
    }
}

module.exports = SpecialtyTypeController
