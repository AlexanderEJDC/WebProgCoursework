// Write our functions and other scripts here

function removeContentFromElems(elem)
{
    elem.textContent = "";
} //Supply an element, remove its text content. 

function cloneTemplate(selector)
{//Look for a template, then clone its first child as otherwise youll clone one step above it, not wanted. 
    const template = document.querySelector(selector);
    return template.content.firstElementChild.cloneNode(true);
}

function addDefaultRow(msgs, location) 
{//SHOULD create a tableRow, then for every default Message load it into a tableDataCell, appended to TR, append to table. 
    const tr = document.createElement('tr');
    for (const Msg of msgs)
    {
        const td = document.createElement('td');
        td.textContent = Msg;
        tr.append(td)
    }
    location.append(tr); 
}//ACTUALLY does

async function LoadMessages()
{//SHOULD fetch messages, then if it got a valid response, set them from response json. Otherwise, set it to "Bugger" if couldnt retrieve. 
    const response = await fetch('msgs');
    let msgs;
    if (response.ok) {msgs = await response.json();}
    else {msgs = ['Bugger.'];}
    // Then find the table, add the new default row. 
    const table = document.querySelector('#tableBody');
    //removeContentFromElems(table);
    addDefaultRow(msgs, table);
}//ACTUALLY does

function watchForEnter(enter)
{//Watch if enter is pressed. If so, submit. 
    if (e.key === 'Enter'){submitMessage()}
}

async function submitMessage()
{//Should take input and send to server. 
    const msgPayload = 
    { date: el.dateInput.value,
        work: el.workInput.value,
        xp: el.xpInput.value,
        competencies: el.compInput.value
    }//Define message payload
    const response = await fetch('messages', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    
      if (response.ok) 
      {
        l.message.value = '';
        const updatedMessages = await response.json();
        console.log("Updated messages!");
        //removeContentFrom(el.messagelist);
        //showMessages(updatedMessages, el.messagelist);
      } 
      else { console.log('failed to send message', response); }
}

function prepareHandles()
{//Prepare page elements
    el.tableBody = document.querySelector('#tableBody');
    el.dateInput = document.querySelector('.dateInput');
    el.workInput = document.querySelector('.workInput');
    el.xpInput = document.querySelector('.xpInput');
    el.compInput = document.querySelector('.compInput');
    el.submissionBtn = document.querySelector('.submissionBtn');
}

function addEventListeners()
{//Setup listeners for puttons
    el.submissionBtn.addEventListener('click', submitMessage);
    el.dateInput.addEventListener('keyup', watchForEnter);
    el.workInput.addEventListener('keyup', watchForEnter);
    el.xpInput.addEventListener('keyup', watchForEnter);
    el.compInput.addEventListener('keyup', watchForEnter);
}

function loadPage()
{
    prepareHandles();
    addEventListeners();
    LoadMessages();
}

loadPage();
// CREATE HTML TEMPLATE


//The rebuild with database?
const app = {};
const userInterface = {};
app.uid = "root"; 

async function getUserMessages() 
{
    const response = await fetch('/entries/${app.uid}/all')
    if (response.ok){ app.data = await response.json();}
}

await getUserMessages();
console.log(app.data);

function cloneTemplate(selector)
{
    const temp = document.querySelector(selector);
    return temp.content.firstElementChild.cloneNode(true);
}

function populateDiary()
{//For every entry create a new article using the cloned templates.
    for(const entry of app.data){const article = cloneTemplate('#temp=entry')}

    article.querySelector('entryDate').textContent = entry.date;
    article.querySelector('entryWork').textContent = entry.date;
    article.querySelector('entryXP').textContent = entry.date;
    article.querySelector('entryComp').textContent = entry.date;

    const month = document.querySelector('#month1')
    month.append(article)
}

await getUserMessages();
populateDiary();
