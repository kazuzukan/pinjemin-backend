const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./models');

const port = process.env.PORT || 3000;

// const corsOption = {
//     origin: "http://localhost:3000"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync().then(()=>{
    console.log('Database Synced')
})

//for reset database
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const route = require('./routes/index');
route(app);

app.listen(port);
console.log('API server started on: ' + port);