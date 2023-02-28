import express from 'express'; //Imports express module to enable certain features

const application = express();
application.use(express.static('client'));
application.listen(8080);