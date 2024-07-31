var express = require("express");
var cors = require("cors");

var app = express();

const multer = require("multer");
const nodemailer = require("nodemailer");

app.use(cors());

var mysql = require("mysql");

var bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

// Generate a salt for hashing
const salt = "$2b$10$abcde12345fghij67890kl";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.set("view engine", "ejs");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "abubakar",
});

conn.connect(function (err) {
  if (err) throw err;

  console.log("Connection Sucessful");
});

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Register/RegisterImage/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage1 });

app.post("/insert", upload.single("image3"), function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed

  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var email = req.body.email;
  var age = req.body.age;
  var phone = req.body.phone;
  var gender = req.body.gender;

  var address = req.body.address;
  var city = req.body.city;
  var zipcode = req.body.zip;
  var password = req.body.password;

 

  var image = req.file.filename;

  var hash = bcrypt.hashSync(password, salt);
    hash+=password;
  var sql = `insert into lostfound values( ' ' ,'${firstname}', '${lastname}', '${email}' , '${age}', '${phone}', '${gender}', '${address}', '${image}', '${city}', '${zipcode}', '${hash}')`;

  conn.query(sql, function (err, results) {
    if (err) throw err;

    res.json(image);
  });
});

app.post("/Get", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var hash = bcrypt.hashSync(password, salt);

  console.log(hash);
hash+=password;
  var sql = "SELECT * FROM lostfound WHERE Email = ? AND Password = ?";
  conn.query(sql, [email, hash], function (err, results) {
    
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post("/GetAdmin", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  const hash = bcrypt.hashSync(password, salt);

  console.log(hash);

  var sql = "SELECT * FROM Admin WHERE Email = ? AND Password = ?";
  conn.query(sql, [email, hash], function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post("/sendcomment", function (req, res) {
  var postID = req.body.postId;
  var name = req.body.userName;
  var comment = req.body.commentText;

  

  var sql = `insert into comment values( ' ' ,'${postID}', '${name}', '${comment}')`;

  conn.query(sql, function (err, results) {
    if (err) throw err;

    res.json(postID);
  });
});

app.post("/countuser", function (req, res) {
  var sql = "SELECT COUNT(*) FROM lostfound";
  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post("/countfound", function (req, res) {
  var sql = "SELECT COUNT(*) FROM reports WHERE Type LIKE '%Found Item%'";
  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      
      res.json(results);
      
    }
  });
});

app.post("/countlost", function (req, res) {
  var sql = "SELECT COUNT(*) FROM reports WHERE Type LIKE '%Lost Item%'";
  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

///////////////////////////////////////////
///////////////////////////////////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./User DashBoard/upload");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload2 = multer({ storage });

// Route for handling POST request to insert data
app.post("/insert5", upload2.single("image"), function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed

  var date = req.body.date;
  var time = req.body.time;
  var email = req.body.email;
  var locationname = req.body.locationname;
  var phone = req.body.phone;
  var name = req.body.name;
  var type = req.body.type;
  var description = req.body.description;
  var itemname = req.body.itemname;
  var lat = req.body.lat;
  var long = req.body.long;
  var image = req.file.filename;
  var username=req.body.username;
 
 
  // Get the file path of uploaded image

  var sql = `insert into reports values ('','${username}' , '${type}','${date}', '${time}', '${email}', '${locationname}', '${phone}', '${name}', '${image}', '${description}', '${itemname}', '${lat}', '${long}','')`;

  conn.query(sql, function (err, results) {
    if (err) throw err;

    res.send("<h1>Data Inserted.</h1>");
  });
});

app.get("/GetReport", function (req, res) {
  var sql = "SELECT * FROM reports ORDER BY ID DESC";

  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.get("/GetComment", function (req, res) {
  var id = req.query.postId;
  var sql = "SELECT * FROM comment WHERE PostID = ?";
  
  conn.query(sql, [id], function (err, results) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});


app.get("/GetUser", function (req, res) {
  var sql = "SELECT * FROM lostfound";
  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post("/isApplied", function (req, res) {
  id=req.body.postId;

  var sql = `UPDATE reports SET isApplied = 'Yes Applied' WHERE ID = ${id}`;

  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.delete("/deleteuser", function (req, res) {

  var name=req.body.name;
  var email=req.body.email;
  var sql = `DELETE FROM lostfound WHERE Email = '${email}' AND FirstName = '${name}'`;

  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});



app.post("/sendemail", function (req, res) {

  email =req.body.email;
  var name;
  var password;
  var sql = "SELECT * FROM lostfound WHERE Email = ?";
  conn.query(sql, [email], function (err, results) {
    // handle the query results here
    var result = results[0]; 
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else if(results.length>0) {
      name=result.FirstName;
      password=result.Password;
      if(password.length>60){
      var code = password.substring(60);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "f201023@cfd.nu.edu.pk",
      pass: "03074659133",
    },
  });



  const mailOptions = {
    from: "f201023@cfd.nu.edu.pk",
    to: email,
    subject: "Authentication Code",
    text: `Hi ${name},\n\nYour authentication code is: ${code}\n\nBest regards,\nAuthentication Team`,
  };

  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send code.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Code sent to your email address.");
    }
  });

    }
  }
  });
});

var server = app.listen(4000, function () {
  console.log("App running on port 4000");
});


app.get("/getnotification", function (req, res) {
  var sql = "SELECT * FROM reports where  isApplied = 'Yes Applied'";

  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


app.delete("/deletepost", function (req, res) {

  var id=req.body.id;
  var email=req.body.email;
  var sql = `DELETE FROM reports WHERE Email = '${email}' AND ID = '${id}'`;

  conn.query(sql, function (err, results) {
    // handle the query results here
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});



app.post("/send-code", (req, res) => {
  const { name, email, code } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "f201023@cfd.nu.edu.pk",
      pass: "03074659133",
    },
  });

  const mailOptions = {
    from: "f201023@cfd.nu.edu.pk",
    to: email,
    subject: "Authentication Code",
    text: `Hi ${name},\n\nYour authentication code is: ${code}\n\nBest regards,\nAuthentication Team`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send code.");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Code sent to your email address.");
    }
  });
});

app.post("/insertform2", function (req, res) {
  

  var firstname = req.body.name;
  var lastname = req.body.lname;
  var email = req.body.email;
  var age = req.body.age;
  var phone = req.body.phone;
  var gender = req.body.gender;

  var address = req.body.address;
  var city = req.body.city;
  var zipcode = req.body.zip;
  var password = req.body.password;

 

  var image = "nothing";
  var hash = bcrypt.hashSync(password, salt);
  hash+=password;
  
  var sql = `insert into lostfound values( ' ' ,'${firstname}', '${lastname}', '${email}' , '${age}', '${phone}', '${gender}', '${address}', '${image}', '${city}', '${zipcode}', '${hash}')`;

  conn.query(sql, function (err, results) {
    if (err) throw err;

    res.json(image);
  });
});
