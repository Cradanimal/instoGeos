const express = require('express');
const app = express();
const routes = require('./routes.js')(app, express);
const port = 3000;

require('./middleware.js')(app, express);
app.use('/location', routes);

app.listen(port, console.log('Listening on localhost:3000, and I love you'));


