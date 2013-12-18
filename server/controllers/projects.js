var config = require('../../config/config'),
    helpers = require('../helpers'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.database, config.username, config.password, {
      dialect: 'mysql',
      port: 3306
    });

var Project = sequelize.define('Project', {
  title: {type: Sequelize.STRING},
  client: {type: Sequelize.STRING},
  scope: {type: Sequelize.STRING},
  projectCode: {type: Sequelize.STRING},
  projectType: {type: Sequelize.STRING},
  description: {type: Sequelize.TEXT},
  video: {type: Sequelize.BOOLEAN},
  mainImg: {type: Sequelize.STRING},
  fullImg: {type: Sequelize.STRING}
});

sequelize.sync();

exports.get = function(req, res) {
  Project.findAll().
    success(function(projects) {
      sendResponse(res, projects, 201);
    });
};

exports.post = function(req, res) {
  // console.log(req.body);
  // var project = req.body;
  // switch (project.projectType) {
  //   case 1:
  //     var projectCode = theatrical;
  //     var projectType = Theatrical;
      

  // }
  // // ID?

  // Project.findOrCreate(
  //     { title: project.title },
  //     { client: project.client }),
  //     { scope: project.scope },
  //     { projectCode: "" }
  //   .success(function(user, created) {
  //     console.log(user.values);
  //     console.log(created);
  //   });
  sendResponse(res, {}, 201);
};

exports.delete = function(req, res) {
  console.log(req);
};

exports.put = function(req, res) {
  console.log(req);
};
