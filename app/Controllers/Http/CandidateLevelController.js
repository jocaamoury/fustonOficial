'use strict'
const CandidateLevel = use('App/Models/CandidateLevel')
class CandidateLevelController {
    async index(){
        const candidateLevel = await CandidateLevel.all()
        return candidateLevel
    }

    async show({ params }){
        const candidateLevel = await CandidateLevel.findOrFail(params.id)
        return candidateLevel
    }

    async store ({ request }) {
        const { ...data } = request.only([
          'name',
          'description'
        ])
    
        const candidateLevel = await CandidateLevel.create(data)

        await candidateLevel.loadMany()
        return candidateLevel
    }

    async update({ params, request }){
        const candidateLevel = await CandidateLevel.findOrFail(params.id)
        const { ...data } = request.only([
            'name',
            'description'
        ])
    candidateLevel.merge(data)
    await candidateLevel.save()

    await candidateLevel.loadMany()
    return candidateLevel
    }

    async destroy({ params }){
        const candidateLevel = await CandidateLevel.findOrFail(params.id)
        await candidateLevel.delete()
        return "Candidate Level deletado com sucesso!"
    }
}

module.exports = CandidateLevelController
