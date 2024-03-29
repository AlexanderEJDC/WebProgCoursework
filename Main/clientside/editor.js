const el = {}; // Declare an empty object for elements.
const ui = {}; //

function showMessage(payload) {
  el.date.value = payload.dateDone;
  el.work.value = payload.work;
  el.xp.value = payload.xp;
  el.competencies.value = payload.competencies;
}

function getMessageID() {
  return window.location.hash.substring(1);
}

async function recieveMessage() {
  const id = getMessageID(); // Get the message ID, bung into variable
  const response = await fetch(`messages/${id}`); // get the specific message from the ID
  console.log(response);
  let message; // Declare message
  if (response.ok) {
    message = await response.json();
  } else { message = [{ work: 'bugger all', xp: 'None', competencies: 'ID-10-T' }]; }
  console.log('Recieved payload: ', message);
  showMessage(message);
}

async function sendMessage() {
  const id = getMessageID();
  const payload = { id };
  for (const field of ui.input) {
    payload[field.name] = field.value;
    field.value = '';
  }
  console.log('Transmitted Payload', payload);

  const response = await fetch(`messages/${id}`,
    {
      method: 'PUT', // We are REPLACING data, so PUT it in the location of the ID.
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

  if (response.ok) {
    const updatedMsgs = await response.json();
    showMessage(updatedMsgs);
  } else { console.log('Bugger.', response); }
}

// FUNCTIONS FOR HANDLING DATA INPUT

function checkKeys(e) { // add a message if enter pressed
  if (e.key === 'Enter') { sendMessage(); }
}

function prepareHandles() {
  ui.input = document.querySelectorAll('.input');
  el.submissionBtn = document.querySelector('#submit');
  el.date = document.querySelector('#date');
  el.work = document.querySelector('#work');
  el.xp = document.querySelector('#xp');
  el.competencies = document.querySelector('#competencies');
}

function addEventListeners() {
  el.submissionBtn.addEventListener('click', sendMessage);
  el.date.addEventListener('keyup', checkKeys);
  el.work.addEventListener('keyup', checkKeys);
  el.xp.addEventListener('keyup', checkKeys);
  el.competencies.addEventListener('keyup', checkKeys);
}

function pageLoaded() {
  prepareHandles();
  addEventListeners();
  recieveMessage();
}

pageLoaded();
