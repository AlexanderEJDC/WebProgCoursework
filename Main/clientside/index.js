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
}//ACTUALLY does

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

function loadPage()
{
    LoadMessages();
}

loadPage();
// CREATE HTML TEMPLATE