var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
    
var config = require('../../config/config'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.database, config.username, config.password, {
      dialect: 'mysql',
      port: 3306
    }),
    bcrypt = require('bcrypt');

var User = sequelize.define('User', {
  username: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
  salt: {type: Sequelize.STRING}
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.find({ where: { username: username }})
      .error(function(err) {
        return done(err);
      })
      .success(function(user) {
        if (!user) {
          return done(null, false);
        } else {
          bcrypt.compare(password, user.dataValues.password, function(err, match) {
            if (err) return done(err, false);
            if (!match) return done(null, false);
            return done(null, user);
          });
        }
      });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

exports.index = function(req, res) {
  res.render('main/index');
};

exports.error = function(req, res) {
  res.render('main/index', {message: 'An error occured. Please try again.'});
};

exports.failed = function(req, res) {
  res.render('main/index', { message: 'Bad username or password.'});
};

exports.auth = function (req, res, fn) {
 passport.authenticate('local', function (err, user) {
   if (err || !user) {
     if (err) return res.redirect('/error');
     return res.redirect('/failed');
   }
   req.logIn(user, function (err) {
     if (err) {
       return fn(err);
     }
     return res.redirect('/home');
   });
 })(req, res, fn);
};
