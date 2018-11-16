var express = require('express');
var app = express();
var request = require("request");
var userDetails;
const port = process.env.PORT || 5000;

app.get('/api/', function(req, res) {
  res.json('default');
});

app.get("/api/genericGetCall", function(req, res, next) {

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
  var sql = "SELECT " + req.query.getColumn + " FROM " + req.query.table + " WHERE " + req.query.compColumn + " = " + req.query.val + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(result.rows)
      client.end();
    }
  });
});

app.get("/api/getAllAccInfo", function(req, res, next) {
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
  var sql = "SELECT * FROM account WHERE acc_Email = " + req.query.email + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(result.rows)
      client.end();
    }
  });
});

// Will update a value in the database with a string
app.get('/api/updateGenericString', function(req, res, next) {
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
  var sql = "UPDATE " + req.query.table + " SET " + req.query.generalCol + " = '" + req.query.newStringVal + "' WHERE " + req.query.compCol + " = " + req.query.compVal + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});









// Will update a value in the database with a number value
app.get('/api/updateGenericNumber', function(req, res, next) {
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
  var sql = 'UPDATE ' + req.query.table + ' SET ' + req.query.generalCol + ' = ' + req.query.newStringVal + ' WHERE ' + req.query.compCol + ' = ' + req.query.compVal + ';';
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});







app.get('/api/createAccount', function(req, res, next) {
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
  var sql = "INSERT INTO account(acc_firstName, acc_lastName, acc_email, acc_type) VALUES ('" + req.query.firstName + "','" + req.query.lastName + "','" + req.query.email + "'," +  req.query.accType + ');';
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});






app.get('/api/createCourse', function(req, res, next) {
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
  var sql = "INSERT INTO course(crs_name, crs_desc, crs_term) VALUES ('" + req.query.crsName + "','" + req.query.crsDesc + "','" +  req.query.crsTerm + "');";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});







app.get('/api/createNote', function(req, res, next) {
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
  var sql = "INSERT INTO note(note_rating, acc_id, note_text, sch_crs_sec_id) VALUES (" + req.query.rating + "," + req.query.accId + ",'" +  req.query.noteText + "', " + req.query.secID + ");";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});









app.get('/api/getNoteByUser', function(req, res, next) {
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
  var sql = "SELECT note_text FROM note WHERE acc_id = " + req.query.accId + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});






app.get('/api/getNoteBySection', function(req, res, next) {
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
  var sql = "SELECT note_text FROM note WHERE sch_crs_sec_id = " + req.query.sch_crs_sec_id + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});





app.get('/api/getNoteByAccAndSection', function(req, res, next) {
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
  var sql = "SELECT note_text FROM note WHERE sch_crs_sec_id = " + req.query.sch_crs_sec_id + " AND acc_id = " + req.query.accId + ";";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log("error")
      reject(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});



app.listen(port, () => console.log(`Listening on port 5000`))

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
