//express Installed
const express = require("express");

//axios Installed
const axios = require("axios");

//Express assigned to a constant
const app = express();

//Port
const port = 5000;

//Endpoints
app.get("/", async (req, res) => {
  const url = "https://swapi.dev/api/films/3/?format=json";
  const response = await axios.get(url);
  const characters = response.data.characters;
  console.log(characters);
});

//Listening Port
app.listen(port, () => console.log(`port ${port}`));
