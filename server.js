console.log("*******SERVER*******");
const express = require("express");
const app = express();
const mongoose = require('./server/config/mongoose.js');
const path = require("path");
app.use(express.static(__dirname + "/public/dist/public"));
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const flash = require('express-flash');
app.use(flash());

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');



app.listen(8000, () => console.log("listening on port 8000"));

