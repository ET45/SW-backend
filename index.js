//express Installed
const express = require("express");

const cors = require("cors");

//axios Installed
const axios = require("axios");

//Express assigned to a constant
const app = express();

app.use(cors());

//Port
const port = 5000;

//Endpoints
app.get("/", async (req, res) => {
  const url = "https://swapi.dev/api/films/3/";
  const response = await axios.get(url);
  const characters = response.data.characters;
  const pagination = characters.slice(0, 30);

  //Info mapped and sorted
  let charactersInfo = await Promise.all(
    pagination.map((character) => axios.get(character))
  );

  charactersInfo = charactersInfo.map((character) => character.data);
  console.log(charactersInfo);

  /*   console.log(characters); */
  res.status(200).send(charactersInfo);
});

//Listening Port
app.listen(port, () => console.log(`port ${port}`));
