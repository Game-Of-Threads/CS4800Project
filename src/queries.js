var express = require('express');
var app = express();
var request = require("request");
var userDetails;
const port = process.env.PORT || 5000;



// /***********************************
//  *   All Account related Methods   *
//  ***********************************/
// function getAccFirstName(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//   var sql = "SELECT acc_firstName FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(sql, function(err, result) {
//     if (err) {
//       throw err;
//     }
//     //console.log(result.rows[0]); // good
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getAccLastName(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//   var sql = "SELECT acc_LastName FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(sql, function(err, result) {
//     if (err) {
//       throw err;
//     }
//     //console.log(result.rows[0]); // good
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getAccEmail(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT acc_email FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getAccBirth(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT acc_Birth FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function getAccRating(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT acc_Rating FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function getAccType(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT acc_Type FROM account WHERE acc_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function alterAccFirstName(accId, newName) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE account SET acc_firstName = '" + newName.toString() + "' WHERE acc_id = " + accId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterAccLastName(accId, newName) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE account SET acc_LastName = '" + newName.toString() + "' WHERE acc_id = " + accId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterAccEmail(accId, newEmail) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE account SET acc_email = '" + newEmail.toString() + "' WHERE acc_id = " + accId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterAccRating(accId, newRating) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE account SET acc_Rating = '" + newRating.toString() + "' WHERE acc_id = " + accId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterAccType(accId, newType) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE account SET acc_Type = '" + newType.toString() + "' WHERE acc_id = " + accId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function createAcc(accFirst, accLast, accType, accRating, accEmail) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO account(acc_firstName, acc_LastName, acc_Type, acc_Rating, acc_Email) VALUES(\'${accFirst}\', \'${accLast}\', ${accType}, ${accRating}, \'${accEmail}\');`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// /***********************************
//  *    All Course related Methods   *
//  ***********************************/
// function getCrsName(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT crs_name FROM course WHERE crs_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getCrsNum(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT crs_num FROM course WHERE crs_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getCrsDesc(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT crs_desc FROM course WHERE crs_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getCrsTerm(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT crs_term FROM course WHERE crs_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function alterCrsName(crsId, newName) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE course SET crs_name = '" + newName.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterCrsNum(crsId, newNum) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE course SET crs_num = '" + newNum.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterCrsDesc(crsId, newDesc) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE course SET crs_desc = '" + newDesc.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterCrsTerm(crsId, newTerm) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE course SET crs_Term = '" + newTerm.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function createCrs(crs_name, crs_num, crs_desc, crs_term) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO course(crs_name, crs_num, crs_desc, crs_term) VALUES(\'${crs_name}\', ${crs_num}, \'${crs_desc}\', \'${crs_term}\');`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// /***********************************
//  *     All Note related Methods    *
//  ***********************************/
// function getNoteFile(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT note_file FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getNoteDate(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT note_date FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getNoteRating(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT note_rating FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getNoteAccId(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT acc_id FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getNoteType(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT note_type FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getNoteText(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT note_text FROM note WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// // ATM the noteFile will be entered as a string but will be patched
// // soon to enter it as a bytea so that postgres can read it
// function alterNoteFile(data, newFile) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE note SET note_File = '" + newFile.toString() + "' WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterNoteRating(data, newRating) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE note SET note_rating = '" + newRating.toString() + "' WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterNoteAccId(data, accId) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE note SET acc_id = '" + accId.toString() + "' WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterNoteType(data, noteType) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE note SET note_type= '" + noteType.toString() + "' WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function alterNoteText(data, noteText) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE note SET note_text= '" + noteText.toString() + "' WHERE note_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     client.end();
//   });
// }
//
// function creatNote(note_file, note_rating, acc_id, note_type, note_text) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO note(note_file, note_rating, acc_id, note_type, note_text) VALUES(\'${note_file}\', ${note_rating}, ${acc_id}, ${note_type}, \'${note_text}\');`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function getSecNum(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT sec_num FROM section WHERE sec_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getSecTime(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT sec_time FROM section WHERE sec_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getSecLoc(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT sec_loc FROM section WHERE sec_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
// }
//
// function getSchName(data, callback) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   var res = "";
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "SELECT sch_name FROM school WHERE sch_id = " + data.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     return callback(result.rows[0]);
//     client.end();
//   });
//   //return res;
// }
//
// function getSecNotes(sch_crs_sec_id) {
//   // var pg = require('pg');
//   // var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   // var client = new pg.Client(conString);
//   // client.connect(function(err) {
//   //   if (err) {
//   //     return console.error('could not connect to postgres', err);
//   //   }
//   // });
//   //
//   // var test = "SELECT note_id FROM sec_notes WHERE sch_crs_sec_id = " + sch_crs_sec_id.toString() + ";";
//   // client.query(test, function(err, result) {
//   //   if (err) {
//   //     return console.error('error running query', err);
//   //   }
//   //
//   //   var test = "SELECT note_text FROM note WHERE note_id = " + result.toString() + ";";
//   //   client.query(test, function(err, result) {
//   //     if (err) {
//   //       return console.error('error running query', err);
//   //     }
//   //
//   //     console.log(result.rows[0]);
//   //     client.end();
//   //   });
//   // });
// }
//
// function getStudentSections(data, callback) {
//   // var pg = require('pg');
//   // var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   // var client = new pg.Client(conString);
//   // client.connect(function(err) {
//   //   if (err) {
//   //     return console.error('could not connect to postgres', err);
//   //   }
//   // });
//   //
//   // var test = "SELECT sec_id FROM stu_sec WHERE acc_id = " + data.toString() + ";";
//   // client.query(test, function(err, result) {
//   //   if (err) {
//   //     return console.error('error running query', err);
//   //   }
//   //
//   //   var test = "SELECT sec_name FROM section WHERE sec_id = " + result.toString() + ";";
//   //   client.query(test, function(err, result) {
//   //     if (err) {
//   //       return console.error('error running query', err);
//   //     }
//   //
//   //     console.log(result.rows[0]);
//   //     client.end();
//   //   });
//   // });
// }
//
// function alterSchName(schId, newName) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE school SET sch_name = '" + newName.toString() + "' WHERE sch_id = " + schId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function alterSecNum(secId, newNum) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE section SET sec_num = '" + newNum.toString() + "' WHERE sec_id = " + secId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function alterSecTime(secId, newTime) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE section SET sec_time = '" + newTime.toString() + "' WHERE sec_id = " + secId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function alterSecLoc(secId, newLoc) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = "UPDATE section SET sec_loc = '" + newLoc.toString() + "' WHERE sec_id = " + secId.toString() + ";";
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function createSchCrsSec(sch_id, crs_id, sec_id) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO sec_crs_sec(sch_id, crs_id, sec_id) VALUES(${sch_id}, ${crs_id}, ${sec_id});`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function createSchool(sch_Name) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO school(sch_Name) VALUES(\'${sch_Name}\');`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function createSecNote(note_id, sch_crs_sec_id) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO sec_notes(sch_crs_sec_id, note_id) VALUES(${sch_crs_sec_id}, ${note_id});`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
// function createStuSec(acc_id, sch_crs_sec_id) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//
//   var test = `INSERT INTO stu_sec(sch_crs_sec_id, acc_id) VALUES(${sch_crs_sec_id}, ${acc_id});`;
//   client.query(test, function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0]);
//     client.end();
//   });
// }
//
//
//
//




var pg = require('pg');
var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
var client = new pg.Client(conString);
console.log("About to Connect!");
client.connect(function(err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
});
console.log("Connected!");


app.get('/api/', function(req, res) {
  res.json('default');
});

app.get('/api/hello', function(req, res) {
  res.json('you did it');

});

app.get("/api/firstName", function(req, res, next) {
  console.log(req.query.tagId);
  var sql = "SELECT acc_firstName FROM account WHERE acc_id = " + req.query.tagId + ";";
  //var sql = "SELECT acc_firstName FROM account WHERE acc_id = 1;";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows[0])
      res.send(result.rows[0])
      client.end();
    }
});
});

app.get("/api/lastName", function(req, res, next) {
  console.log(req.query.tagId);
  var sql = "SELECT acc_LastName FROM account WHERE acc_id = " + req.query.tagId + ";";
  //var sql = "SELECT acc_firstName FROM account WHERE acc_id = 1;";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows[0])
      res.send(result.rows[0])
      client.end();
    }
});
});


app.listen(port, () => console.log(`Listening on port 5000`))
