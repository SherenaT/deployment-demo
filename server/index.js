//npm init -y & npm i express

const express = require("express");
const path = require("path");
//a way for the computer to tell itself a path to take,how hirku will know what file to express

const app = express();
//set invoked express to 'app' variable

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
  //allow us to send a specific file in the app.get (in this case out HTML), were going to send paths (library) join.
  //dirname is a placehold variable, follow this path to this 'dirname'. after in " " were going to send html, '../' means go back folder
});

//declare a port #, assigned a port # from hiraku or add one in manually
const port = process.env.PRT || 4005;
//env stands for enviroment

//app listen, port as first argument, second one is a function
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
