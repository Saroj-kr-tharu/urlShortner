
const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./Route/index');

const { PORT } = require('./config/serverConfig');


const serverSetupAndStart = () => {
    const app = express();


    // middlewares
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use('/api', Routes);

    app.listen(PORT, () => {
        console.log(`URL-SHORTNER-MICROSERVICE Server is Running at port ${PORT}`);


    })
}


serverSetupAndStart();