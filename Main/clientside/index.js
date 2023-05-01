// Write our functions and other scripts here

import { send } from "process";

//!!FUNCTIONS TO HANDLE MESSAGES

async function sendMessage()
{//Send a message to the server
    const payload = 
    { //Set payload up as an array for consistent format.
        msg: [el.suppliedDate.value, el.suppliedWork.value, el.suppliedXP.value, el.suppliedComp]
    }; 
    console.log("Payload", payload);

    const response = await fetch("messages", 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }); 

    if (response.ok)
    {
        
    } else {}
}       

//END OF MESSAGE FUNCTIONS

//!!FUNCTIONS TO HANDLE ELEMENTS

function checkKeys(e) 
{//add a message if enter pressed
    if (e.key === 'Enter') { sendMessage(); }
}


function prepareHandles()
{//Setup elements used in the code here.
    el.tableParent = document.querySelector("#placementTable");
    el.suppliedDate = document.querySelectorAll(".dateInput");
    el.suppliedWork = document.querySelectorAll(".workInput");
    el.suppliedXP = document.querySelectorAll(".xpInput");
    el.suppliedComp = document.querySelectorAll(".compInput");
    el.submissionBtn = document.querySelectorAll(".submissionBtn");
}

function addEventListeners()
{//Setup button listeners. 
    el.submissionBtn.addEventListeners("click", sendMessage); 
    el.suppliedDate.addEventListeners("keyup", checkKeys);
    el.suppliedWork.addEventListeners("keyup", checkKeys);
    el.suppliedXP.addEventListeners("keyup", checkKeys);
    el.suppliedComp.addEventListeners("keyup", checkKeys);
}//Should setup a listneer on the submit button, and also on the input areas. 

//END OF ELEMENT HANDLING FUNCTIONS!!

//!!FUNCTIONS FOR CLONING TEMPLATES GO HERE

//END OF CLONING FUNCTIONS!!

function loadPage()
{
    prepareHandles(); 
    addEventListeners();
    LoadMessages();
}

loadPage(); //Load the page with everything initialised 