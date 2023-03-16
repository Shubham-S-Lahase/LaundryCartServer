const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const RegistrationRoute = require('./routes/register');
const LoginRoute = require('./routes/login');

app.use(cors());
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/", RegistrationRoute);
app.use("/", LoginRoute);

app.get('/', (req,res) => {
    res.status(200).json({
        "Message":"Server is OK"
    })
})

module.exports = app;