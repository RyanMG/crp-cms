var express = require('express'),
    config = require('./config/config');

var app = express();

if (process.env.setup === 'true') {
  setup = require('./config/userInfo');
}

require('./server/express')(app, config);
require('./server/routes')(app);

app.listen(config.port);
