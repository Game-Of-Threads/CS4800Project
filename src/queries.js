var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParser = require('body-parser');
var userDetails;
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded())
var jsonParser = bodyParser.json()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/', function(req, res) {
  res.json('default');
});

app.get("/api/genericGetCall", function(req, res, next) {

  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
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
      console.log(err);
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
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
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
      console.log(err);
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
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
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
      console.log(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});

// Will update a value in the database with a number value
app.post('/api/updateGenericNumber', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
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
      console.log(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql)
      client.end();
    }
  });
});

app.post('/api/createAccount', function(req, res, next) {
  var pg = require('pg');
  var conString = 'postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb';
  var client = new pg.Client(conString);
  console.log('About to Connect!');
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log('Connected!');
  var sql = "INSERT INTO account(acc_name, acc_email) " +
            "VALUES ('"+ req.body.name + "', '" + req.body.email + "') " +
            "ON CONFLICT(acc_email) DO UPDATE SET acc_name = '" + req.body.name + "';";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.send(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(result)
      client.end();
    }
  });
});

app.post('/api/createCourse', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
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
      console.log(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(sql);
      client.end();
    }
  });
});

app.post('/api/createNote', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
  var client = new pg.Client(conString);
  console.log("About to Connect!");
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log("Connected!");
   //var sql = "ALTER TABLE note ALTER COLUMN acc_id varchar(255);";
  var sql = "INSERT INTO note(note_id, note_rating, note_title, note_text, course_name, sch_crs_sec_id, acc_id) VALUES ('"
						   + req.body.note_id + "', "
                           + req.body.rating + ", '"
                           + req.body.note_title + "' , '"
                           + req.body.note_text + "', '"
                           + req.body.course_name + "' , "
                           + 1 + ", (SELECT acc_id FROM account WHERE acc_email = '" + req.body.email + "' ));";

  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.send(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(result)
      client.end();
    }
  });
});

app.post('/api/saveNote', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
  var client = new pg.Client(conString);
  console.log("About to Connect!");
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log("Connected!");
  var sql = "UPDATE note SET note_title= '" + req.body.note_title +
                          "' , note_text='" + req.body.note_text +
                          "' , course_name='" + req.body.course_name +
                          "' WHERE note_id= '" + req.body.id + "';"
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      res.send(err);
      client.end();
    } else {
      console.log(result.rows);
      res.send(result);
      client.end();
    }
  });
});

app.get('/api/getNoteByUser', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
  var client = new pg.Client(conString);
  console.log("About to Connect!");
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log("Connected!");
  console.log(req.query.accEmail);
  var sql = "SELECT * FROM note WHERE acc_id = (SELECT acc_id FROM account WHERE acc_email = '" + req.query.accEmail + "');";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      client.end();
    } else {
      console.log(result.rows)
      res.send(result)
      client.end();
    }
  });
});

app.post('/api/getNoteBySection', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
  var client = new pg.Client(conString);
  console.log("About to Connect!");
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log("Connected!");
  console.log("REQUEST BODY: ", req.body);
  var sql = "SELECT note.note_text, note.note_title, note.note_id, note.course_name, account.acc_name, account.acc_email FROM note, account WHERE note.course_name ='" + req.body.course_name + "'AND account.acc_id = note.acc_id;";
  console.log("Query being sent to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      client.end();
    } else {
      console.log(result.rows);
      res.send({body: result.rows})
      client.end();
    }
  });
});

app.get('/api/getNoteByAccAndSection', function(req, res, next) {
  var pg = require('pg');
  var conString = "postgres://AllNotes:CS48001!@bronconotedb.cybfsmw3rjuo.us-west-1.rds.amazonaws.com:5432/bronconotedb";
  var client = new pg.Client(conString);
  console.log("About to Connect!");
  client.connect(function(err) {
    if (err) {
      return console.error('could not connect to postgres', err);
    }
  });
  console.log("Connected!");
  var sql = "SELECT note_text FROM note WHERE sch_crs_sec_id = " + req.query.sch_crs_sec_id + " AND acc_id = " + req.query.accId + ";";
  console.log("Query being sent     to the db" + sql);
  client.query(sql, function(err, result) {
    if (err) {
      console.log(err);
      reject(new Error('...'));
      client.end();
    } else {
      console.log(result.rows);
      res.send(sql);
      client.end();
    }
  });
});

app.listen(port, () => console.log(`Listening on port 5000`))