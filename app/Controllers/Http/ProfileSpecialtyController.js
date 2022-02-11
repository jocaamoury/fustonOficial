'use strict'
const ProfileSpecialty = use('App/Models/ProfileSpecialty')
class ProfileSpecialtyController {
    async index(){
        const profileSpecialty = await ProfileSpecialty.all()
        return profileSpecialty
    }

    async show({ params }){
        const profileSpecialty = await ProfileSpecialty.findOrFail(params.id)
        await profileSpecialty.loadMany(['profile', 'specialty'])
        return profileSpecialty
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'id_profile',
          'id_specialty'
        ])
    
        const profileSpecialty = await ProfileSpecialty.create(data)

        await profileSpecialty.loadMany()
        return profileSpecialty
    }

    async update({ params, request }){
        const profileSpecialty = await ProfileSpecialty.findOrFail(params.id)
        const { ...data } = request.only([
            'id_profile',
            'id_specialty'
        ])
    profileSpecialty.merge(data)
    await profileSpecialty.save()

    await profileSpecialty.loadMany()
    return profileSpecialty
    }

    async destroy({ params }){
        const profileSpecialty = await ProfileSpecialty.findOrFail(params.id)
        await profileSpecialty.delete()
        return "Associação de profile com especialidade deletada com sucesso!"
    }
}

module.exports = ProfileSpecialtyController
