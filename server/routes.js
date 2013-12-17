module.exports = function(app){

  var home = require('../app/controllers/home');
  app.get('/home', home.index);

  var login = require('../app/controllers/login');
  app.get('/', login.index);
  app.get('/error', login.error);
  app.get('/failed', login.failed);
  app.post('/login', login.auth);

};
