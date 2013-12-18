var login = require('./login');

module.exports = function(app){
  app.get('/', routes.index);
  app.get('/error', routes.error);
  app.get('/failed', routes.failed);
  app.get('/logout', login.logout);
  app.get('/pages/:page', ensureAuthenticated, routes.pages);
  app.get('*', ensureAuthenticated, routes.index);
  app.post('/login', login.auth);
};

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

var routes = {
  index: function(req, res) {
    res.render('index', {
      isAuthenticated: req.isAuthenticated()
    });
  },

  error: function(req, res) {
    res.render('index', {
      isAuthenticated: req.isAuthenticated(),
      message: 'An error occured. Please try again.'
    });
  },

  failed: function(req, res) {
    res.render('index', {
      isAuthenticated: req.isAuthenticated(),
      message: 'Bad username or password.'
    });
  },

  pages: function(req, res) {
    var name = req.params.page;
    res.render('pages/' + name);
  }
};
