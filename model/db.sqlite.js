'use strict';

let sqlite3 = require('sqlite3');

let db = new sqlite3.cached.Database('./model/events_db.db', (err) => {
    if (err) {
        throw err;
    }
    console.log("CONNECTED TO THE DATABASE");

});


db.run('PRAGMA journal_mode = WAL;')

module.exports = db;