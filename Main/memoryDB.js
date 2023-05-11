// THIS WILL HANDLE MEMORY

import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
    verbose: true,
  });
  await db.migrate({ migrationsPath: './sql' });
  return db;
}

const dbConnection = init();

export async function listMessages() {
  const db = await dbConnection;
  return db.all('SELECT * FROM Messages');
}

export async function findMessage(id) {
  const db = await dbConnection;
  return db.get('SELECT * FROM Messages WHERE id = ?', id);
}

export async function addMessage(payload) {
  const db = await dbConnection;

  const id = uuid();
  await db.run('INSERT INTO Messages VALUES (?,?,?,?,?)', [id, payload.date, payload.work, payload.xp, payload.competencies]);

  return listMessages();
}

export async function editMessage(updatedMsg) {
  const db = await dbConnection;

  const id = updatedMsg.id;
  const date = updatedMsg.date;
  const work = updatedMsg.work;
  const xp = updatedMsg.xp;
  const competencies = updatedMsg.competencies;

  const query = await db.run('UPDATE Message SET date = ?, work = ?, xp = ?, competencies = ? WHERE id = ?', [date, work, xp, competencies, id]);

  if (query.changes === 0) throw new Error('message not found');

  return findMessage(id);
}

// let messages = [// treat messages as objects.
//   { id: '01', date: '2023-05-05', work: 'Added message strucutre', xp: 'None gained', competencies: 'None' },
//   { id: '02', date: '2023-05-07', work: 'Backend built', xp: 'None gained', competencies: 'None' },
// ];

//! ! FUNCTIONS TO EXPORT

// export function listMessages() { return messages; }

// export function findMessage(id) { // Find a specific message
//   for (const message of messages) { // iterate through all objects
//     if (message.id === id) { // If the message id EXACTLY matches that as stored, return the message
//       return message;
//     }
//   }
// }

// export function addMessage(payload) {
//   const newMessage =
//     { // Declare the new message, and set its parameters.
//       id: uuid(),
//       date: payload.date,
//       work: payload.work,
//       xp: payload.xp,
//       competencies: payload.competencies,
//     };
//   messages = [newMessage, ...messages];
//   return messages;
// }

// export function editMessage(updatedMsg) {
//   const previous = findMessage(updatedMsg.id);
//   if (previous == null) { throw new Error('Not found'); }

//   previous.date = updatedMsg.date;
//   previous.work = updatedMsg.work;
//   previous.xp = updatedMsg.xp;
//   previous.competencies = updatedMsg.competencies;

//   return previous;
// }
