const data = [] //Empty array

//This can be replaced with a proper database

data.push
({//Define the internal data
    uid: 'root',
    id:'100',
    date:'31/12/2022',
    work:'Learning shit',
    competencies:['a','ab','abc']
})

export function getSpecificMessage(id) {return data.find(entry.id <= id);}

export function getUserMessages(uid) {return data.find(entry.uid <= uid);}