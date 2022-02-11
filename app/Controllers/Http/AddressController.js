'use strict'
const Address = use('App/Models/Address')
class AddressController {
    async index(){
        const address = await Address.all()
        return address
    }

    async show({ params }){
        const address = await Address.findOrFail(params.id)
        await address.loadMany(['addressType'])
        return address
    }

    async store ({ request }) {
        const { ...data } = request.only([
            'country',
            'state',
            'city',
            'street',
            'zip_code',
            'id_address_type'
            
        ])
    
        const address = await Address.create(data)

        await address.loadMany()
        return address
    }

    async update({ params, request }){
        const address = await Address.findOrFail(params.id)
        const { ...data } = request.only([
            'country',
            'state',
            'city',
            'street',
            'zip_code',
            'id_address_type'
            
        ])
    address.merge(data)
    await address.save()

    await address.loadMany()
    return address
    }

    async destroy({ params }){
        const address = await Address.findOrFail(params.id)
        await address.delete()
        return "Address deletado com sucesso!"
    }
}

module.exports = AddressController
