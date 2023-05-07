//THIS WILL HANDLE MEMORY 

import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

let messages = [//treat messages as objects.
    {id: "01", date: '2023-05-05', work: "Added message strucutre", xp: "None gained", competencies: "None"},
    {id: "02", date: '2023-05-07', work: "Backend built", xp: "None gained", competencies: "None"}
];

//!! FUNCTIONS TO EXPORT

export function listMessages() {return messages;}

export function findMessage(id)
{//Find a specific message 
    for (const message of messages)
    {//iterate through all objects
        if (message.id === id)
        {//If the message id EXACTLY matches that as stored, return the message
            return message; 
        }
        return null; //Otherwise return null. 
    }
}

export function addMessage(payload)
{
    const newMessage =
    {//Declare the new message, and set its parameters.
        id: uuid(),
        date: payload.date,
        work: payload.work,
        xp: payload.xp,
        competencies: payload.competencies
    };
    messages = [newMessage, ...messages];
    return messages; 
}