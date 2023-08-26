const express = require('express');
const config = require('../config.js');
const app = express();
const user = require('./components/user/routes.js');
//Router
app.use('/api/user', user);
app.listen(config.api.port, () => {
  console.log('Api escuchando en puerto ', config.api.port);
});
