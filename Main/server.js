import express from 'express'; //Imports express module to enable certain features
import * as db from './memoryDB.js';

//Start the server this way: note --watch server.js

const application = express();
application.use(express.static('clientside'));

function sendHandler(response, result, )
{
    if(result){response.json(result)}
    else{response.status(404).send('Entry not found')}
}

const msgs = 
[
    "07/03/2002",
    "Got born.",
    "Gained knowledge of how to start breathing.",
    "Compentcy of ISO-00000001 how to live used."
];

function getAllMessages(request, response)
{//Turn Messages into a json to throw at index.js
    response.json(msgs);
}

function postMessages(request, response)
{
    console.log(request.body);
    messages = [request.body.msg, ...messages.slice(0,9)];
    response.json(messages);
}

application.get('/msgs', getAllMessages);
application.post('/msgs', express.json(), postMessages);

function getUIDMessages()
{//Show entries from specific user

}

function getIDMessages()
{//get all messages

}
//application.get('/entries/:id');
//application.get('/entries/:uid');

application.listen(8080); //Listen to port 8080, as default 80 for HTTP is restricted. 