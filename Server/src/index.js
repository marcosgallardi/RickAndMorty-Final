const server = require("./app");
const saveApiData = require("./controllers/saveApiData");
const {sequelize} = require("./DB_connection");
const PORT = 3001;



server.listen(PORT, async () => {
  await sequelize.sync({force: true});
  await saveApiData()
  console.log("Server raised in port: " + PORT);
});

/*/////////////////////////////////////////////////////////
version con NODE puro
const http = require("http");
const fs = require("fs");
const PORT = 3001;
const getCharById = require("./controllers/getCharById")
//const character = require(".utils/data.js")

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("/rickandmorty/character")){
    let id = req.url.split("/").at(-1)
    getCharById(res,id)
  } 

    }).listen(PORT, "localhost");*/

//split: divide un string en array pasandole un separardor.
//pop: elimina el ultimo elemento de un array y lo devuelve1
