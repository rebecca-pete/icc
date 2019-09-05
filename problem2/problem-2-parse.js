"use strict";

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/readFile", (request, response) => {
  fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
      Response.send("Error with server");
    }
  });
});

app.listen(3000, ()=>{
  console.log(`App listening on ${PORT}`);
});

function formatFile(data){
  let acc = 0;
  let regex1 = /^WARNING[0-9]+.\*{3}$/; //no inner text
  let regex2 = /^WARNING[0-9]+\s\w+\s\*{3}$/g; // may have inner text

  const fileResults = data.split("\n");

  fileResults.forEach(line =>{
    acc = acc++;
    if(line.match(regex1) || line.match(regex2)){
      console.log(`${line} + line number: ${acc}`);
    } else {
      return false;
    }
  })
}