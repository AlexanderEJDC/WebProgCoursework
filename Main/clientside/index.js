// Write our functions and other scripts here

//import { table } from "console";
//import { send } from "process";

//!!Items to declare at start

let el = {}; //Create an empty object to store elements inside
let ui = {}; //Create an empty object to store UI elements inside. 


//End of starting declarations

//!!FUNCTIONS TO HANDLE MESSAGES

function removeContent(element) 
{
    element.textContent = '';
}

function showMessage(payload)
{
    for (const item of payload)
    {
        const newRow = cloneTemplate('#tableRowTemplate');
        const dateCell = newRow.querySelector('.date');
        dateCell.textContent = item.date;
        const workCell = newRow.querySelector('.workDone');
        workCell.textContent= item.work;
        const experienceCell = newRow.querySelector('.ExpGain');
        experienceCell.textContent = item.xp;
        const competencyCell = newRow.querySelector('.Competencies');
        competencyCell.textContent = item.competencies;
        el.tableParent.appendChild(newRow); 
    }
}

async function loadAllMessages()
{//Load all stored messages
    const response = await fetch('messages');
    let messages; 
    if (response.ok) { messages = await response.json(); }
    else (messages = [{work: 'bugger all', xp: "None", competencies: "ID-10-T" }] )
    //for every message, create a new row, send content in there and append to the table parent      
    showMessage(messages);
}

async function sendMessage()
{//Send a message to the server
    const payload = {}; //Declare payload as an empty object
    for (const field of ui.inputFields)
    {//For every payload field, assign a name to a field and store the relative value
        payload[field.name] = field.value;
        field.value = ""; //Reset the form field back to empty
    } 
    console.log("Payload", payload);
    console.log("Payload date", payload.date)

    const response = await fetch("messages", 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }); 

    if (response.ok)
    {//send the updated messages to the server, then append it to the table
        const updatedMsgs = await response.json();
        removeContent(el.tableParent);
        showMessage(updatedMsgs);
    } else {console.log("Failed to send message");}
}       

//END OF MESSAGE FUNCTIONS

//!!FUNCTIONS TO HANDLE ELEMENTS

function checkKeys(e) 
{//add a message if enter pressed
    if (e.key === 'Enter') { sendMessage(); }
}

function toggleBtn()
{
    for (const field of ui.inputFields)
    {//Check every field, if its has no value, disable the button. 
        if (!field.value) {el.submissionBtn.disabled = true; return;}
    }
    el.submissionBtn.removeAttribute('disabled');
}


function prepareHandles()
{//Setup elements used in the code here.
    el.tableParent = document.querySelector("#placementTable");
    ui.inputFields = document.querySelectorAll(".payloadInput");
    el.submissionBtn = document.querySelector("#submissionBtn");
    el.suppliedDate = document.querySelector("#dateInput");
    el.suppliedWork = document.querySelector("#workInput");
    el.suppliedXP = document.querySelector("#xpInput");
    el.suppliedComp = document.querySelector("#compInput");
}

function addEventListeners()
{//Setup button listeners. 
    el.submissionBtn.addEventListener("click", sendMessage); 
    el.suppliedDate.addEventListener("keyup", checkKeys);
    el.suppliedWork.addEventListener("keyup", checkKeys);
    el.suppliedXP.addEventListener("keyup", checkKeys);
    el.suppliedComp.addEventListener("keyup", checkKeys);
}//Should setup a listneer on the submit button, and also on the input areas. 

//END OF ELEMENT HANDLING FUNCTIONS!!

//!!FUNCTIONS FOR CLONING TEMPLATES GO HERE

function cloneTemplate(selector)
{
    const template = document.querySelector(selector);
    return template.content.firstElementChild.cloneNode(true);
}

//END OF CLONING FUNCTIONS!!

function loadPage()
{
    prepareHandles(); 
    addEventListeners();
    loadAllMessages();
    //toggleBtn();
}

loadPage(); //Load the page with everything initialised 