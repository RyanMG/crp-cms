var config = require('../../config/config'),
    helpers = require('../helpers'),
    Sequelize = require('sequelize');
    sequelize = new Sequelize(config.database, config.username, config.password, {
      dialect: 'mysql',
      port: 3306
    });

var Project = sequelize.define('Project', {
  orderId: { type: Sequelize.INTEGER, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  client: { type: Sequelize.STRING, allowNull: false },
  scope: { type: Sequelize.STRING, allowNull: false },
  projectCode: { type: Sequelize.STRING, allowNull: false },
  projectType: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  video: { type: Sequelize.BOOLEAN, allowNull: false },
  mainImg: { type: Sequelize.STRING, allowNull: false },
  fullImg: { type: Sequelize.STRING, allowNull: false }
});

// Uncomment to reset collection, then recomment
//sequelize.sync({force:true});

exports.get = function(req, res) {
  Project.findAll().
    success(function(projects) {
      sendResponse(res, projects, 201);
    });
};

exports.post = function(req, res) {
  var project = {
    orderId: 0,
    title: req.body.title,
    client: req.body.client,
    scope: '',
    projectCode: '',
    projectType: '',
    description: req.body.description,
    video: false,
    mainImg: req.body.mainImg.split('\\')[2],
    fullImg: req.body.fullImg.split('\\')[2]
  };

  switch (req.body.projectType) {
    case '1':
      project.projectCode = 'theatrical';
      project.projectType = 'Theatrical';
      break;
    case '2':
      project.projectCode = 'homeEnt';
      project.projectType = 'Home Entertainment';
      break;
    case '3':
      project.projectCode = 'gaming';
      project.projectType = 'Interactive Gaming';
      break;
    default:
      console.log('request project:', req.body.projectType);
      break;
  }

  switch (req.body.scope) {
    case '1':
      project.scope = 'Creative';
      break;
    case '2':
      project.scope = 'Creative & Production';
      break;
    case '3':
      project.scope = 'Production Design';
      break;
    case '4':
      project.scope = 'Creative & Production Design';
      break;
    case '5':
      project.scope = 'Production';
      break;
    default:
      console.log('request scope:', req.body.scope);
      break;
  }
  if (req.body.video) {
    project.video = true;
    project.fullImg = req.body.fullImg.split('.')[0];
  }

  Project.count().success(function(num) {
    project.orderId = num + 1;
    Project.find({ where: { title: project.title, projectCode: project.projectCode } })
      .success(function(proj) {
        if (proj === null) {
          Project.build(project).save().success(function() {
            sendResponse(res, arguments[0].dataValues.id, 201);
          }).error(function(error) {
            console.log(error);
          });
        } else {
          sendResponse(res, 'This project already exists. Please choose update if you want to update it.', 201);
        }
      })
      .error(function(error) {
        sendResponse(res, error, 201);
      });
  });

};

exports.delete = function(req, res) {
  Project.find(req.body.id)
    .success(function(project) {
      project.destroy().success(function() {
        sendResponse(res, 'removed', 204);
      }).error(function(err) {
        console.log(err);
        sendResponse(res, err, 204);
      });
    });
};

exports.patch = function(req, res) {
  for (var key in req.body) {
//    var id = parseInt(key,10);
    Project.find(key).success(function(project) {
      project.updateAttributes({ 'orderId': req.body[key].orderId });
    });
  }
  sendResponse(res, 'reordered', 200);
};

exports.put = function(req, res) {
  Project.find(req.body.id).success(function(project) {
    if (project) {
      project.updateAttributes(req.body).success(function() {
        sendResponse(res, 'Updated', 200);
      }).error(function(err) {
        console.log(err);
        sendResponse(res, error, 200);
      });
    } else {
      console.log('No project found');
      sendResponse(res, '', 200);
    }
  });
};
