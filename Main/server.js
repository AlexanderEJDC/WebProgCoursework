import express from 'express'; //Imports express module to enable certain features

const application = express();
application.use(express.static('clientside'));

const Msgs = 
[
    "07/03/2002",
    "Got born.",
    "Gained knowledge of how to start breathing.",
    "Compentcy of ISO-00000001 how to live used."
];

function getMessages(request, response)
{//Turn Messages into a json to throw at index.js
    response.json(Msgs);
}

application.get('/Msgs', getMessages);

application.listen(8080); //Listen to port 8080, as default 80 for HTTP is restricted. 