'use strict'

const User = use('App/Models/User')

class UserController {
    async index(){
        const user = await User.all()
        return user
    }

    async show({ params }){
        const user = await User.findOrFail(params.id)
        await user.loadMany(['permissions', 'roles'])
        return user
    }

    async store ({ request }) {
        const { permissions, roles, ...data } = request.only([
          'email',
          'password',
          'id_user_type',
          'permissions',
          'roles'
        ])
    
        const user = await User.create(data)
        
        if(permissions) {
            await user.permissions().attach(permissions)
        }
        if(roles) {
            await user.roles().attach(roles)
        }
        await user.loadMany(['roles', 'permissions'])
        return user
    }

    async update({ params, request }){
        const user = await User.findOrFail(params.id)
        const { permissions, roles, ...data } = request.only([
        'email',
        'password',
        'id_user_type',
        'permissions',
        'roles'
        ])
    user.merge(data)
    await user.save()

    if(permissions) {
        await user.permissions().sync(permissions)
    }

    if(roles) {
        await user.roles().sync(roles)
    }

    await user.loadMany(['roles', 'permissions'])

    return user
    }

    async destroy({ params }){
        const user = await User.findOrFail(params.id)
        await user.delete()
        return "Usuário deletado com sucesso!"
    }
}

module.exports = UserController
