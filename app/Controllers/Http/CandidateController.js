'use strict'

const Candidate = use('App/Models/Candidate')
const Profile = use('App/Models/Profile')

class CandidateController {
    async index(){
        const candidate = await Candidate
        .query()
        .select('id', 'email', 'id_user_type')
        .where('id_user_type', 7)
        .fetch()
        return candidate
    }

    async show({ params }){
        const candidate = await Candidate
        .query()
        .select('id', 'email', 'id_user_type')
        .where('id', params.id)
        .where('id_user_type', 7)
        .fetch()

        if(JSON.stringify(candidate) === '[]'){
            return 'Candidato não encontrado.'
        }else{
            return candidate
        }
        
    }

    //Adicionando Candidato com Profile.

    async store ({ request, response }) {
        const { permissions, roles, ...data } = request.only([ 'email', 'permissions', 'roles' ]); data['id_user_type'] = 7; data['password'] = 'senhafake';

        //Validador manual: verifica se o email ja existe.
        try {
            const candidate = await Candidate.create(data)

            if(permissions) {
                await candidate.permissions().attach(permissions)
            }
            if(roles) {
                await candidate.roles().attach(roles)
            }
            await candidate.loadMany()

            const { ...dataProfile } = request.only(['name', 'birth_date', 'cell', 'pretense', 'note', 'id_candidate_level'])
            dataProfile['user_id'] = candidate['id'];

            const profile = await Profile.create(dataProfile)
            await profile.loadMany()

            const result = { ...data, ...dataProfile };
            result['id_profile'] = profile['id'];
            result['Message'] = 'Candidato Adicionado com sucesso!';

            return result

        } catch (error) {
            if(error.errno == 1062){
                return response.status(406).send({message: 'Email já existente na base de dados'})
            }if(error.errno == 1364){
                return response.status(406).send({message: 'Informe o campo email.'})
            }
            else{
                return response.status(406).send({message: error.sqlMessage})
            }
        }

        
    }

    async update({ params, request, response }){
        const candidate = await Candidate.findOrFail(params.id);
        const { ...data } = request.only([ 'email', ]); data['id_user_type'] = 7; data['password'] = 'senhafake';

        //Validador manual: verifica se o email ja existe.
        try {
            candidate.merge(data)
            await candidate.save()
        } catch (error) {
            if(error.errno == 1062){
                return response.status(406).send({message: 'Email já existente na base de dados'})
            }if(error.errno == 1364){
                return response.status(406).send({message: 'Informe o campo email.'})
            }else{
                return response.status(406).send({message: error.sqlMessage})
            }
        }

        const profile = await Profile.findBy('user_id', params.id)

        const { ...dataProfile } = request.only([ 'name', 'birth_date', 'cell', 'pretense', 'note', 'id_candidate_level' ])

        profile.merge(dataProfile);

        await profile.save();

        const result = { ...data, ...dataProfile };
        result['id_profile'] = profile['id'];
        result['Message'] = 'Candidato Alterado com sucesso!';

        return result

        
    }

    async destroy({ params }){
        
        var message = {};

        try {
            const candidate = await Candidate.findOrFail(params.id)
            if(candidate){
                await candidate.delete();
                message['result_users'] = 'Usuário deletado com sucesso.';
            }
            
        } catch (error) {
            message['result_users'] = 'Usuário não encontrado.';
        }

        try {
            const profile = await Profile.findBy('user_id', params.id);
            if(profile){
                await profile.delete();
                message['result_profile'] = 'Perfil deletado com sucesso.';
            }

        } catch (error) {
            message['result_profile'] = 'Perfil não encontrado.';
        }

        return message;
    }
}

module.exports = CandidateController
