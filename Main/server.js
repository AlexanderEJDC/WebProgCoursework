import * as memoryDB from './memoryDB.js';
import express from 'express'; // Imports express module to enable certain features

const application = express();
application.use(express.static('clientside', { extensions: ['html'] }));


function getMessages(request, response) { // Turn Messages into a json to throw at index.js
  response.json(memoryDB.listMessages());
}

function getMessageByID(request, response) { // Look for a message by its ID
  const result = memoryDB.findMessage(request.params.id);
  if (result) { response.json(result); } else { response.status(404).send('No match for that ID.'); }
}

function postMessages(request, response) {
  const messages = memoryDB.addMessage(request.body);
  response.json(messages);
}

function putMessage(request, response) { // Put a new message in the same spot as provided
  const message = memoryDB.editMessage(request.body);
  response.json(message);
}

// wrap async function for express.js error handling
function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

application.get('/messages', asyncWrap(getMessages));
application.get('/messages/:id', asyncWrap(getMessageByID));
application.put('/messages/:id', express.json(), asyncWrap(putMessage));
application.post('/messages', express.json(), asyncWrap(postMessages));

application.listen(8080); // Listen to port 8080, as default 80 for HTTP is restricted.
