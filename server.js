var express = require("express");
var app = express();
var path = require("path");
var PORT = 3000;
const fs = require("fs");

// Without middleware
app.get("/notes", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "/notes.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      err.stack;
    } else {
      console.log("Sent:", fileName);
    }
  });
});
app.get("/api/notes", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  // Read dbjson file
  fs.readFile("db.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const items = JSON.parse(data);

    res.json(items);
    console.log(items); // Print items from db
  });

  app.get("*", function (req, res) {
    var options = {
      root: path.join(__dirname),
    };

    var fileName = "/index.html";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        err.stack;
      } else {
        console.log("Sent:", fileName);
      }
    });
  });
  app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
  });

  //https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/

  // Read users.json file
  fs.readFile("db.json", function (err, data) {
    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const users = JSON.parse(data);

    console.log(users); // Print users
  });
});
