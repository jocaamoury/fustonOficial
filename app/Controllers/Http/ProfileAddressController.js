'use strict'
const ProfileAddress = use('App/Models/ProfileAddress')
class ProfileAddressController {
    async index(){
        const profileAddress = await ProfileAddress.all()
        return profileAddress
    }

    async show({ params }){
        const profileAddress = await ProfileAddress.findOrFail(params.id)
        await profileAddress.loadMany(['profile', 'address'])
        return profileAddress
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'id_profile',
          'id_address'
        ])
    
        const profileAddress = await ProfileAddress.create(data)

        await profileAddress.loadMany()
        return profileAddress
    }

    async update({ params, request }){
        const profileAddress = await ProfileAddress.findOrFail(params.id)
        const { ...data } = request.only([
            'id_profile',
            'id_address'
        ])
    profileAddress.merge(data)
    await profileAddress.save()

    await profileAddress.loadMany()
    return profileAddress
    }

    async destroy({ params }){
        const profileAddress = await ProfileAddress.findOrFail(params.id)
        await profileAddress.delete()
        return "Associação de profile com endereço deletada com sucesso!"
    }
}

module.exports = ProfileAddressController
