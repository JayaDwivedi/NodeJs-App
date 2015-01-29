/**
 * Created by jayad on 1/29/2015.
 */
var app = require('./config/express')();
require('./config/routes')(app);

app.listen('3000');
console.log("App is on 3000 port");
