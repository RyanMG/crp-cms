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
  console.log(req.body);
  var project = {
    orderId: 0,
    title: req.body.projectTitle,
    client: req.body.clientName,
    scope: '',
    projectCode: '',
    projectType: '',
    description: req.body.description,
    video: false,
    mainImg: req.body.mainImage,
    fullImg: req.body.fullImage
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
    project.fullImg = req.body.fullImage.split('.')[0];
  }

  Project.count().success(function(num) {
    project.orderId = num + 1;
    
    Project.find({ title: project.title }, { projectCode: project.projectCode })
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
  console.log(req);
};

exports.put = function(req, res) {
  console.log(req);
};
