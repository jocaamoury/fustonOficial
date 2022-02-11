'use strict'
const AddressType = use('App/Models/AddressType')
class AddressTypeController {
    async index(){
        const addressType = await AddressType.all()
        return addressType
    }

    async show({ params }){
        const addressType = await AddressType.findOrFail(params.id)
        return addressType
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'name',
          'description'
        ])
    
        const addressType = await AddressType.create(data)

        await addressType.loadMany()
        return addressType
    }

    async update({ params, request }){
        const addressType = await AddressType.findOrFail(params.id)
        const { ...data } = request.only([
            'name',
            'description'
        ])
    addressType.merge(data)
    await addressType.save()

    await addressType.loadMany()
    return addressType
    }

    async destroy({ params }){
        const addressType = await AddressType.findOrFail(params.id)
        await addressType.delete()
        return "AddressType deletado com sucesso!"
    }
}

module.exports = AddressTypeController
