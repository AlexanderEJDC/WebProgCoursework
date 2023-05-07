import * as memoryDB from './memoryDB.js';
import express from 'express'; //Imports express module to enable certain features

const application = express();
application.use(express.static('clientside'));


function getMessages(request, response)
{//Turn Messages into a json to throw at index.js
    response.json(memoryDB.listMessages());
}



function getMessageByID(request, response)
{
    const result = memoryDB.findMessage(request.params.id);
    if (result) { response.json(result); }
    else { response.status(404).send("No match for that ID."); }
}

function postMessages(request, response) 
{
    const messages = memoryDB.addMessage(request.body);
    response.json(messages); 
}

application.get('/messages', getMessages);
application.post('/messages', express.json(), postMessages)

application.listen(8080); //Listen to port 8080, as default 80 for HTTP is restricted. 