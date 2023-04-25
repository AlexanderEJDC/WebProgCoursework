// Write our functions and other scripts here

import { send } from "process";

//add a message if enter pressed
function checkKeys(e) 
{
    if (e.key === 'Enter') 
    {
      //sendMessage(); SEND MESSAGE FUNCTION HERE!!
    }
  }

function removeContentFromElems(elem)
{
    elem.textContent = "";
} //Supply an element, remove its text content. 

function addDefaultRow(Msgs, location) 
{//SHOULD create a tableRow, then for every default Message load it into a tableDataCell, appended to TR, append to table. 
    const tr = document.createElement('tr');
    for (const Msg of Msgs)
    {
        const td = document.createElement('td');
        td.textContent = Msg;
        tr.append(td)
    }
    location.append(tr); 
}

async function sendMessage()
{//Send this to the server
    const msgPayload = { msg: el.suppliedDate.value, el.suppliedWork.value, }
    //console.log('Payload', payload);

    const response = await fetch('messages',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(msgPayload)
    }); 

    if (response.ok)
    {
        el.message.value = '';
        const updatedMsgs = await response.json(); 
        cloneTableRow(); 
    } 
    else { console.log("Failed to send message"); }
}

function populateWithTemplates()
{

}

async function LoadMessages()
{//SHOULD fetch messages, then if it got a valid response, set them from response json. Otherwise, set it to "Bugger" if couldnt retrieve. 
    const response = await fetch('Msgs');
    let Msgs;
    if (response.ok) {Msgs = await response.json();}
    else {Msgs = ['Bugger.'];}
    // Then find the table, remove prior content(?), then add the new default row. 
    const table = document.querySelector('#placementTable');
    //removeContentFromElems(table);
    addDefaultRow(Msgs, table);
}//ACTUALLY does

function prepareHandles()
{//Setup elements used in the code here.
    el.tableParent = document.querySelectorAll("#placementTable");
    el.suppliedDate = document.querySelectorAll(".dateInput");
    el.suppliedWork = document.querySelectorAll(".workInput");
    el.suppliedXP = document.querySelectorAll(".xpInput");
    el.suppliedComp = document.querySelectorAll(".compInput");
    el.submissionBtn = document.querySelectorAll(".submissionBtn");
}

function addEventListeners()
{//Setup button listeners. TODO: Also keyboard strokes
    submissionBtn.addEventListeners("click", sendMessage); 
}


//FUNCTIONS FOR CLONING TEMPLATES GO HERE
function cloneTableHeader()
{
    const tableHeader = document.querySelector("#tableMain");
    const clonedTHeader = tableHeader.cloneNode(true);
    document.body.append(clonedTHeader);
}
function cloneTableRow(data)
{
    const tableRow = document.querySelector("#tableRowTemplate");
    const cloneTableRow = tableRow.cloneNode(true);
    
    //TODO: Figure out a way to add text content to the individual classes
    //Preferably make it an import straight from the message. 
    table.append(cloneTableRow);
}

function loadPage()
{
    prepareHandles(); 
    addEventListeners();
    LoadMessages();
}

loadPage();
// CREATE HTML TEMPLATE