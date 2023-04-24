// Write our functions and other scripts here

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

async function LoadMessages()
{//SHOULD fetch messages, then if it got a valid response, set them from response json. Otherwise, set it to "Bugger" if couldnt retrieve. 
    const response = await fetch('Msgs');
    let Msgs;
    if (response.ok) {Msgs = await response.json();}
    else {Msgs = ['Bugger.'];}
    // Then find the table, remove prior content(?), then add the new default row. 
    const table = document.querySelector('#tableBody');
    //removeContentFromElems(table);
    addDefaultRow(Msgs, table);
}//ACTUALLY does


//FUNCTIONS FOR CLONING TEMPLATES GO HERE
function cloneTableHeader()
{
    const tableHeader = document.querySelector("#tableMain");
    const clonedTHeader = tableHeader.cloneNode(true);
    document.body.append(clonedTHeader);
}
function cloneTableRow()
{
    const tableRow = document.querySelector("#tableRowTemplate");
    const cloneTableRow = tableRow.cloneNode(true);
    //TODO: Figure out a way to add text content to the individual classes
    //Preferably make it an import straight from the message. 
    document.body.append(cloneTableRow);
}

function loadPage()
{
    LoadMessages();
}

loadPage();
// CREATE HTML TEMPLATE