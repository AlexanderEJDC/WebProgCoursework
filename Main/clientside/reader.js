// READ ONLY MODE

//! !Items to declare at start

const el = {}; // Create an empty object to store elements inside


// End of starting declarations

//! !FUNCTIONS TO HANDLE MESSAGES

function showMessage(payload) {
  for (const item of payload) { // For every sub-payload recieved, add new table rows.
    // Will create new row, and fill four datacells with content.
    console.log('Payload Recieved: ', item);
    const newRow = cloneTemplate('#tableRowTemplate');
    const dateCell = newRow.querySelector('.date');
    dateCell.textContent = item.dateDone;
    const workCell = newRow.querySelector('.workDone');
    workCell.textContent = item.work;
    const experienceCell = newRow.querySelector('.ExpGain');
    experienceCell.textContent = item.xp;
    const competencyCell = newRow.querySelector('.Competencies');
    competencyCell.textContent = item.competencies;
    el.tableParent.appendChild(newRow);
  }
}

async function loadAllMessages() { // Load all stored messages
  const response = await fetch('messages');
  let messages;
  if (response.ok) { messages = await response.json(); } else { messages = [{ work: 'bugger all', xp: 'None', competencies: 'ID-10-T' }]; }
  // for every message, create a new row, send content in there and append to the table parent
  showMessage(messages);
}

function prepareHandles() { // Setup elements used in the code here.
  el.tableParent = document.querySelector('#placementTable');
}

//! !FUNCTIONS FOR CLONING TEMPLATES GO HERE

function cloneTemplate(selector) {
  const template = document.querySelector(selector);
  return template.content.firstElementChild.cloneNode(true);
}
// END OF CLONING FUNCTIONS!!
function loadPage() {
  prepareHandles();
  loadAllMessages();
}

loadPage(); // Load the page with everything initialised
