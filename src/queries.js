var express = require('express');
var app = express();




module.exports = {
  //   getAccId: getAccId,
  getAccFirstName: getAccFirstName,
  getAccLastName: getAccLastName,
  getAccEmail: getAccEmail,
  getAccBirth: getAccBirth,
  getAccRating: getAccRating,
  getAccType: getAccType,
  //   getCrsId: getCrsId,
  getCrsName: getCrsName,
  getCrsNum: getCrsNum,
  getCrsTerm: getCrsTerm,
  // getdata: getdata,
  getNoteFile: getNoteFile,
  getNoteDate: getNoteDate,
  getCrsDesc: getCrsDesc,
  getNoteRating: getNoteRating,
  getNoteAccId: getNoteAccId,
  getNoteType: getNoteType,
  getNoteText: getNoteText,
  //   getSchCrsSecId: getSchCrsSecId,
  //   getSchId: getSchId,
  getSchName: getSchName,
  getSecNotes: getSecNotes,
  //   getSecId: getSecId,
  getSecNum: getSecNum,
  getSecTime: getSecTime,
  getSecLoc: getSecLoc,
  getStudentSections: getStudentSections,
  alterAccFirstName: alterAccFirstName,
  alterAccLastName: alterAccLastName,
  alterAccEmail: alterAccEmail,
  alterAccRating: alterAccRating,
  alterAccType: alterAccType,
  alterCrsName: alterCrsName,
  alterCrsNum: alterCrsNum,
  alterCrsDesc: alterCrsDesc,
  alterCrsTerm: alterCrsTerm,
  alterNoteFile: alterNoteFile,
  alterNoteRating: alterNoteRating,
  alterNoteAccId: alterNoteAccId,
  alterNoteType: alterNoteType,
  alterNoteText: alterNoteText,
  alterSchName: alterSchName,
  alterSecNum: alterSecNum,
  alterSecTime: alterSecTime,
  alterSecLoc: alterSecLoc,
  createAcc: createAcc,
  createCrs: createCrs,
  creatNote: creatNote,
  createSchCrsSec: createSchCrsSec,
  createSchool: createSchool,
  createSecNote: createSecNote,
  createStuSec: createStuSec
};

/***********************************
 *   All Account related Methods   *
 ***********************************/
function getAccFirstName(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  var sql = "SELECT acc_firstName FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(sql, function(err, result) {
    if (err) {
      throw err;
    }
    //console.log(result.rows[0]); // good
    return callback(result.rows[0]);
    client.end();
  });
}

function getAccLastName(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  var sql = "SELECT acc_LastName FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(sql, function(err, result) {
    if (err) {
      throw err;
    }
    //console.log(result.rows[0]); // good
    return callback(result.rows[0]);
    client.end();
  });
}

function getAccEmail(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT acc_email FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getAccBirth(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT acc_Birth FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    console.log(result.rows[0]);
    client.end();
  });
}

function getAccRating(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT acc_Rating FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    console.log(result.rows[0]);
    client.end();
  });
}

function getAccType(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT acc_Type FROM account WHERE acc_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    console.log(result.rows[0]);
    client.end();
  });
}

function alterAccFirstName(accId, newName) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE account SET acc_firstName = '" + newName.toString() + "' WHERE acc_id = " + accId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterAccLastName(accId, newName) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE account SET acc_LastName = '" + newName.toString() + "' WHERE acc_id = " + accId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterAccEmail(accId, newEmail) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE account SET acc_email = '" + newEmail.toString() + "' WHERE acc_id = " + accId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterAccRating(accId, newRating) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE account SET acc_Rating = '" + newRating.toString() + "' WHERE acc_id = " + accId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterAccType(accId, newType) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE account SET acc_Type = '" + newType.toString() + "' WHERE acc_id = " + accId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function createAcc(accFirst, accLast, accType, accRating, accEmail) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO account(acc_firstName, acc_LastName, acc_Type, acc_Rating, acc_Email) VALUES(\'${accFirst}\', \'${accLast}\', ${accType}, ${accRating}, \'${accEmail}\');`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

/***********************************
 *    All Course related Methods   *
 ***********************************/
function getCrsName(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT crs_name FROM course WHERE crs_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getCrsNum(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT crs_num FROM course WHERE crs_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getCrsDesc(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT crs_desc FROM course WHERE crs_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getCrsTerm(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT crs_term FROM course WHERE crs_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function alterCrsName(crsId, newName) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE course SET crs_name = '" + newName.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterCrsNum(crsId, newNum) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE course SET crs_num = '" + newNum.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterCrsDesc(crsId, newDesc) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE course SET crs_desc = '" + newDesc.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterCrsTerm(crsId, newTerm) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE course SET crs_Term = '" + newTerm.toString() + "' WHERE crs_id = " + crsId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function createCrs(crs_name, crs_num, crs_desc, crs_term) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO course(crs_name, crs_num, crs_desc, crs_term) VALUES(\'${crs_name}\', ${crs_num}, \'${crs_desc}\', \'${crs_term}\');`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

/***********************************
 *     All Note related Methods    *
 ***********************************/
function getNoteFile(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT note_file FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getNoteDate(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT note_date FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getNoteRating(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT note_rating FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getNoteAccId(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT acc_id FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getNoteType(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT note_type FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getNoteText(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT note_text FROM note WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

// ATM the noteFile will be entered as a string but will be patched
// soon to enter it as a bytea so that postgres can read it
function alterNoteFile(data, newFile) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE note SET note_File = '" + newFile.toString() + "' WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterNoteRating(data, newRating) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE note SET note_rating = '" + newRating.toString() + "' WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterNoteAccId(data, accId) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE note SET acc_id = '" + accId.toString() + "' WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterNoteType(data, noteType) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE note SET note_type= '" + noteType.toString() + "' WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function alterNoteText(data, noteText) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE note SET note_text= '" + noteText.toString() + "' WHERE note_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    client.end();
  });
}

function creatNote(note_file, note_rating, acc_id, note_type, note_text) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO note(note_file, note_rating, acc_id, note_type, note_text) VALUES(\'${note_file}\', ${note_rating}, ${acc_id}, ${note_type}, \'${note_text}\');`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function getSecNum(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT sec_num FROM section WHERE sec_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getSecTime(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT sec_time FROM section WHERE sec_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getSecLoc(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT sec_loc FROM section WHERE sec_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
}

function getSchName(data, callback) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  var res = "";
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "SELECT sch_name FROM school WHERE sch_id = " + data.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    return callback(result.rows[0]);
    client.end();
  });
  //return res;
}

function getSecNotes(sch_crs_sec_id) {
  // var pg = require('pg');
  // var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  // var client = new pg.Client(conString);
  // client.connect(function(err) {
  //   if (err) {
  //     return console.error('could not connect to postgres', err);
  //   }
  // });
  //
  // var test = "SELECT note_id FROM sec_notes WHERE sch_crs_sec_id = " + sch_crs_sec_id.toString() + ";";
  // client.query(test, function(err, result) {
  //   if (err) {
  //     return console.error('error running query', err);
  //   }
  //
  //   var test = "SELECT note_text FROM note WHERE note_id = " + result.toString() + ";";
  //   client.query(test, function(err, result) {
  //     if (err) {
  //       return console.error('error running query', err);
  //     }
  //
  //     console.log(result.rows[0]);
  //     client.end();
  //   });
  // });
}

function getStudentSections(data, callback) {
  // var pg = require('pg');
  // var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  // var client = new pg.Client(conString);
  // client.connect(function(err) {
  //   if (err) {
  //     return console.error('could not connect to postgres', err);
  //   }
  // });
  //
  // var test = "SELECT sec_id FROM stu_sec WHERE acc_id = " + data.toString() + ";";
  // client.query(test, function(err, result) {
  //   if (err) {
  //     return console.error('error running query', err);
  //   }
  //
  //   var test = "SELECT sec_name FROM section WHERE sec_id = " + result.toString() + ";";
  //   client.query(test, function(err, result) {
  //     if (err) {
  //       return console.error('error running query', err);
  //     }
  //
  //     console.log(result.rows[0]);
  //     client.end();
  //   });
  // });
}

function alterSchName(schId, newName) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE school SET sch_name = '" + newName.toString() + "' WHERE sch_id = " + schId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function alterSecNum(secId, newNum) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE section SET sec_num = '" + newNum.toString() + "' WHERE sec_id = " + secId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function alterSecTime(secId, newTime) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE section SET sec_time = '" + newTime.toString() + "' WHERE sec_id = " + secId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function alterSecLoc(secId, newLoc) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = "UPDATE section SET sec_loc = '" + newLoc.toString() + "' WHERE sec_id = " + secId.toString() + ";";
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function createSchCrsSec(sch_id, crs_id, sec_id) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO sec_crs_sec(sch_id, crs_id, sec_id) VALUES(${sch_id}, ${crs_id}, ${sec_id});`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function createSchool(sch_Name) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO school(sch_Name) VALUES(\'${sch_Name}\');`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function createSecNote(note_id, sch_crs_sec_id) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO sec_notes(sch_crs_sec_id, note_id) VALUES(${sch_crs_sec_id}, ${note_id});`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}

function createStuSec(acc_id, sch_crs_sec_id) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });

  var test = `INSERT INTO stu_sec(sch_crs_sec_id, acc_id) VALUES(${sch_crs_sec_id}, ${acc_id});`;
  client.query(test, function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    client.end();
  });
}









var request = require("request");
var userDetails;

// function getFirstNamev2(data) {
//   var pg = require('pg');
//   var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
//   var client = new pg.Client(conString);
//   client.connect(function(err) {
//     if (err) {
//       return console.error('could not connect to postgres', err);
//     }
//   });
//   var sql = "SELECT acc_firstName FROM account WHERE acc_id = " + data.toString() + ";";
//
//   return new Promise(function(resolve, reject) {
//     client.query(sql, function(err, result) {
//       if (err) {
//         reject(err);
//         client.end();
//       } else {
//         resolve(result.rows[0])
//         client.end();
//       }
//
//     });
//
//   })
//
// }





// client.connect(function(err) {
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
// });
//
// app.get('/', function (req, res) {
//     return res.send({ error: true, message: 'hello' })
// });
//
// app.get('/todos', function (req, res) {
//     client.query('SELECT * FROM account WHERE acc_id = 1', function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'Todo list' });
//     });
// });

app.get("/name", function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:Cs48001!@dbv2.cjmjfhlkhtzb.us-west-1.rds.amazonaws.com:5432/DBV2";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  var sql = "SELECT acc_firstName FROM account WHERE acc_id = 1;";
  client.query(sql, function(err, result) {
    if (err) {
      reject(err);
      client.end();
    } else {
      res.send(result.rows[0])
      client.end();
    }
});
});







// console.log('getAccLastName');
// getAccLastName(11);

// console.log('getAccBirth');
// getAccBirth(11);

// console.log('getAccEmail');
// getAccEmail(11);

// console.log('getAccRating');
// getAccRating(11);

// console.log('getAccType');
// getAccType(11);

// console.log('getCrsName');
// getCrsName(2);

// console.log('getCrsNum');
// getCrsNum(2);

// console.log('getCrsTerm');
// getCrsTerm(2);

// console.log('getCrsDesc');
// getCrsDesc(2)

// console.log('getNoteDate');
// getNoteDate(2)

// console.log('getNoteRating');
// getNoteRating(2)

// console.log('getNoteAccId');
// getNoteAccId(2);

// console.log('getNoteType');
// getNoteType(2);

// console.log('getNoteText');
// getNoteText(2);

// console.log("Call Function");
// getSchName(function (err, result) {

// console.log('getSchName');
// console.log(getSchName(1));

// console.log('getSecNum');
// getSecNum(1);
//
// console.log('getSecTime');
// getSecTime(1);

// console.log('getSecLoc');
// getSecLoc(1);

// console.log('alterAccFirstName');
// alterAccFirstName(4, 'NewA ccount Name');

// console.log('alterAccLastName');
// alterAccLastName(4, 'New Last Name');

// console.log('alterAccEmail');
// alterAccEmail(4, 'new@new');

// console.log('alterAccRating');
// alterAccRating(4, 76457);

// console.log('alterAccType');
// alterAccType(4, 100);

// console.log('alterCrsName');
// alterCrsName(1, "New Name");

// console.log('alterCrsNum');
// alterCrsNum(1, 100000);

// console.log('alterCrsDesc');
// alterCrsDesc(1, "New desc");

// console.log('alterCrsTerm');
// alterCrsTerm(1, "new Term");

// console.log('alterNoteFile');
// alterNoteFile(1, "new Term");

// console.log('alterNoteRating');
// alterNoteRating(1, 987654);

// console.log('alterNoteType');
// alterNoteType(1, 333);

// console.log('alterNoteText');
// alterNoteText(1, "new Text");

// console.log('alterSchName');
// alterSchName(1, "new school name");

// console.log('alterSecNum');
// alterSecNum(1, 32132123);

// console.log('alterSecTime');
// alterSecTime(1, "new section time");

// console.log('alterSecLoc');
// alterSecLoc(1, "new section location");

// console.log('createAcc');
// createAcc("Drew", "Umlang", 1, 10, "dhumlang@cpp.edu");

// console.log('createCrs');
// createCrs("CS", 4800, "Software Engineering", "Fall18");


// var stuff_i_want = '';
//
// getAccLastName(1, function(result){
//   stuff_i_want = result;
//   console.log(stuff_i_want);
// });
