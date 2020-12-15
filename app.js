const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./models');

const config = {
    PORT: process.env.PORT || '3000',
    ENV: process.env.NODE_ENV || 'development',
}

require('dotenv').config();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync().then(()=>{
    console.log('Database Synced')
})

// for reset database
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const route = require('./routes/index');
route(app);

app.listen(config.PORT, () => {
    console.log(`starting ${config.ENV} server at http://localhost:${config.PORT}`);
});