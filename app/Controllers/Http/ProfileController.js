'use strict'
const Profile = use('App/Models/Profile')
class ProfileController {
    async index(){
        const profile = await Profile.all()
        return profile
    }

    async show({ params }){
        const profile = await Profile.findOrFail(params.id)
        await profile.loadMany(['candidateLevel'])
        return profile
    }

    async store ({ request }) {
        const { ...data } = request.only([
            'name',
            'birth_date',
            'cell',
            'pretense',
            'note',
            'id_candidate_level',
            'user_id'
        ])
    
        const profile = await Profile.create(data)

        await profile.loadMany()
        return profile
    }

    async update({ params, request }){
        const profile = await Profile.findOrFail(params.id)
        const { ...data } = request.only([
            'name',
            'birth_date',
            'cell',
            'pretense',
            'note',
            'id_candidate_level',
            'user_id'
        ])
    profile.merge(data)
    await profile.save()

    await profile.loadMany()
    return profile
    }

    async destroy({ params }){
        const profile = await Profile.findOrFail(params.id)
        await profile.delete()
        return "Profile deletado com sucesso!"
    }
}

module.exports = ProfileController
