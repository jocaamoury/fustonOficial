'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    //Adicionando profile na busca principal.
    // this.addGlobalScope(function (builder) {
    //   builder.with('profile'),
    //   builder.with('userType')
    // })

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  // Buscando apenas usuários que tem perfil. Ao chamar o metodo, usar apenas HasProfile.
  static scopeHasProfile (query) {
    return query.has('profile')
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  userType(){
    return this.belongsTo('App/Models/UserType', 'id_user_type', 'id');
  }

  profile(){
    return this.hasOne('App/Models/Profile', 'id', 'user_id');
  }

}

module.exports = User
