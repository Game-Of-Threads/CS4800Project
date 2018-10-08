

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
  // getNoteId: getNoteId,
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
     getSecName: getSecName,
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
     alterSecName: alterSecName,
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
 function getAccFirstName(accId) {
   var pg = require('pg');
   var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
   var client = new pg.Client(conString);
   client.connect(function(err) {
     if(err) {
       return console.error('could not connect to postgres', err);
     }
   });

  var test = "SELECT acc_firstName FROM account WHERE acc_id = "+accId.toString()+";";
    client.query(test, function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
  });
}

function getAccLastName(accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_lastName FROM account WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getAccEmail(accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_lastName FROM account WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getAccBirth(accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_Birth FROM account WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getAccRating(accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_Rating FROM account WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getAccType(accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_Type FROM account WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterAccFirstName(accId, newName) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE account SET acc_firstName = '" + newName.toString() + "' WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterAccLastName(accId, newName) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE account SET acc_LastName = '" + newName.toString() + "' WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterAccEmail(accId, newEmail) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE account SET acc_email = '" + newEmail.toString() + "' WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterAccRating(accId, newRating) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE account SET acc_Rating = '" + newRating.toString() + "' WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterAccType(accId, newType) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE account SET acc_Type = '" + newType.toString() + "' WHERE acc_id = "+accId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createAcc(accFirst, accLast, accType, accRating, accEmail) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO account(acc_firstName, acc_LastName, acc_Type, acc_Rating, acc_Email) VALUES(\'${accFirst}\', \'${accLast}\', ${accType}, ${accRating}, \'${accEmail}\');`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

/***********************************
 *    All Course related Methods   *
 ***********************************/
function getCrsName(crsId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT crs_name FROM course WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getCrsNum(crsId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT crs_num FROM course WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getCrsDesc(crsId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT crs_desc FROM course WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getCrsTerm(crsId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT crs_term FROM course WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterCrsName(crsId, newName) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE course SET crs_name = '" + newName.toString() + "' WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterCrsNum(crsId, newNum) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE course SET crs_num = '" + newNum.toString() + "' WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterCrsDesc(crsId, newDesc) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE course SET crs_desc = '" + newDesc.toString() + "' WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterCrsTerm(crsId, newTerm) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE course SET crs_Term = '" + newTerm.toString() + "' WHERE crs_id = "+crsId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createCrs(crs_name, crs_num, crs_desc, crs_term) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO course(crs_name, crs_num, crs_desc, crs_term) VALUES(\'${crs_name}\', ${crs_num}, \'${crs_desc}\', \'${crs_term}\');`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

/***********************************
 *     All Note related Methods    *
 ***********************************/
function getNoteFile(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_file FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getNoteDate(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_date FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getNoteRating(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_data FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getNoteAccId(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT acc_id FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getNoteType(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_type FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getNoteText(noteId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_text FROM note WHERE note_id = "+noteId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}


// ATM the noteFile will be entered as a string but will be patched
// soon to enter it as a bytea so that postgres can read it
function alterNoteFile(noteID, newFile) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE note SET note_File = '" + newFile.toString() + "' WHERE note_id = "+noteID.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterNoteRating(noteID, newRating) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE note SET note_rating = '" + newRating.toString() + "' WHERE note_id = "+noteID.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterNoteAccId(noteID, accId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE note SET acc_id = '" + accId.toString() + "' WHERE note_id = "+noteID.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterNoteType(noteID, noteType) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE note SET note_type= '" + noteType.toString() + "' WHERE note_id = "+noteID.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterNoteText(noteID, noteText) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE note SET note_text= '" + noteText.toString() + "' WHERE note_id = "+noteID.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function creatNote(note_file, note_rating, acc_id, note_type, note_text) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO note(note_file, note_rating, acc_id, note_type, note_text) VALUES(\'${note_file}\', ${note_rating}, ${acc_id}, ${note_type}, \'${note_text}\');`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getSecName(sectionId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT section_name FROM section WHERE section_id = "+sectionId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getSecTime(sectionId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT section_time FROM section WHERE section_id = "+sectionId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getSecLoc(sectionId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT section_loc FROM section WHERE section_id = "+sectionId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getSchName(sectionId) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT section_name FROM section WHERE section_id = "+sectionId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function getSecNotes(sch_crs_sec_id) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT note_id FROM sec_notes WHERE sch_crs_sec_id = "+sch_crs_sec_id.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }

     var test = "SELECT note_text FROM note WHERE note_id = "+result.toString()+";";
       client.query(test, function(err, result) {
         if (err) {
           return console.error('error running query', err);
         }

         console.log(result);
         client.end();
   });
 });
}

function getStudentSections(acc_id) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "SELECT sec_id FROM stu_sec WHERE acc_id = "+acc_id.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }

     var test = "SELECT sec_name FROM section WHERE sec_id = "+result.toString()+";";
       client.query(test, function(err, result) {
         if (err) {
           return console.error('error running query', err);
         }

         console.log(result);
         client.end();
   });
 });
}

function alterSchName(schId, newName) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE school SET sch_name = '" + newName.toString() + "' WHERE sch_id = "+schId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterSecName(secId, newName) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE section SET sec_name = '" + newName.toString() + "' WHERE sec_id = "+secId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterSecTime(secId, newTime) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE section SET sec_time = '" + newTime.toString() + "' WHERE sec_id = "+secId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function alterSecLoc(secId, newLoc) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = "UPDATE section SET sec_loc = '" + newLoc.toString() + "' WHERE sec_id = "+secId.toString()+";";
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createSchCrsSec(sch_id, crs_id, sec_id) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO sec_crs_sec(sch_id, crs_id, sec_id) VALUES(${sch_id}, ${crs_id}, ${sec_id});`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createSchool(sch_Name) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO school(sch_Name) VALUES(\'${sch_Name}\');`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createSecNote(note_id, sch_crs_sec_id) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO sec_notes(sch_crs_sec_id, note_id) VALUES(${sch_crs_sec_id}, ${note_id});`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}

function createStuSec(acc_id, sch_crs_sec_id) {
  var pg = require('pg');
  var conString = "postgres://Drew:passWord@localhost:5432/AllNotes2.0";
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  });

 var test = `INSERT INTO stu_sec(sch_crs_sec_id, acc_id) VALUES(${sch_crs_sec_id}, ${acc_id});`;
   client.query(test, function(err, result) {
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result);
     client.end();
 });
}
