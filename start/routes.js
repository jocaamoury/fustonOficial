'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Sessão
Route.post('sessions', 'SessionController.create')
Route.put('sessions', 'SessionController.refreshToken')

/* 
// listar usuario especifico
Route.get('/users/:id', 'UserController.show')

// criar um usuario
Route.post('/users', 'UserController.store')

// editar usuário
Route.put('/users/:id', 'UserController.update')

// deletar usuário
Route.delete('/users/:id', 'UserController.destroy') */

// Resource aplica o get,post,put,delete automaticamente
Route.resource('users', 'UserController').apiOnly().middleware(['auth:jwt', 'is:gerent']).validator(new Map([
  [['users.store'], ['User']], [['users.update'], ['User']]
]))

Route.resource('profile', 'ProfileController').apiOnly().validator(new Map([
  [['profile.store'], ['Profile']], [['profile.update'], ['Profile']]
])).middleware('auth:jwt')

Route.resource('specialty', 'SpecialtyController').apiOnly().validator(new Map([
  [['specialty.store'], ['Specialty']], [['specialty.update'], ['Specialty']]
])).middleware('auth:jwt')

Route.resource('address', 'AddressController').apiOnly().validator(new Map([
  [['address.store'], ['Address']], [['address.update'], ['Address']]
])).middleware('auth:jwt')




Route.resource('AddressType', 'AddressTypeController').apiOnly().validator(new Map([
  [['addressType.store'], ['AddressType']], [['addressType.update'], ['AddressType']]
])).middleware('auth:jwt')
Route.resource('CandidateLevel', 'CandidateLevelController').apiOnly().validator(new Map([
  [['candidateLevel.store'], ['CandidateLevel']], [['candidateLevel.update'], ['CandidateLevel']]
])).middleware('auth:jwt')

Route.resource('ProfileSpecialty', 'ProfileSpecialtyController').apiOnly().validator(new Map([
  [['profileSpecialty.store'], ['ProfileSpecialty']], [['profileSpecialty.update'], ['ProfileSpecialty']]
])).middleware('auth:jwt')

Route.resource('ProfileAddress', 'ProfileAddressController').apiOnly().validator(new Map([
  [['profileAddress.store'], ['ProfileAddress']], [['profileAddress.update'], ['ProfileAddress']]
])).middleware('auth:jwt')


Route.resource('permissions', 'PermissionController').apiOnly().middleware(['auth:jwt'])

Route.resource('roles', 'RoleController').apiOnly().middleware(['auth:jwt'])