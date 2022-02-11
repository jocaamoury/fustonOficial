'use strict'
const UserType = use('App/Models/UserType')
class UserTypeController {
  async index(){
    const userType = await UserType.all()
    return userType
}

async show({ params }){
    const userType = await UserType.findOrFail(params.id)
    return userType
}

async store ({ request }) {
    const { ...data } = request.only([
      'name',
      'description'
    ])

    const userType = await UserType.create(data)

    await userType.loadMany()
    return userType
}

async update({ params, request }){
    const userType = await UserType.findOrFail(params.id)
    const { ...data } = request.only([
        'name',
        'description'
    ])
userType.merge(data)
await userType.save()

await userType.loadMany()
return userType
}

async destroy({ params }){
    const userType = await UserType.findOrFail(params.id)
    await userType.delete()
    return "UserType deletado com sucesso!"
}

}

module.exports = UserTypeController
