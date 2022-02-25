'use strict'
const Specialty = use('App/Models/Specialty')

class SpecialtyController {
    async index(){
        const specialty = await Specialty.all()
        return specialty
    }

    async show({ params }){
        const specialty = await Specialty.findOrFail(params.id)
        return specialty
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'name',
          'description',
           'id_specialty_type'
        ])
    
        const specialty = await Specialty.create(data)

        await specialty.loadMany()
        return specialty
    }

    async update({ params, request }){
        const specialty = await Specialty.findOrFail(params.id)
        const { ...data } = request.only([
            'name',
            'description'
        ])
    specialty.merge(data)
    await specialty.save()

    await specialty.loadMany()
    return specialty
    }

    async destroy({ params }){
        const specialty = await Specialty.findOrFail(params.id)
        await specialty.delete()
        return "Specialidade deletada com sucesso!"
    }
}

module.exports = SpecialtyController
