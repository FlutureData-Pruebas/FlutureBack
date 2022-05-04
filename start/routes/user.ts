import Route from '@ioc:Adonis/Core/Route'

// To Do
/*


*/

Route.group(() => {
  Route.post('register', 'AuthController.register') // user/register
}).prefix('user')