import GameSavingLoader from "./gamesaving.js";

GameSavingLoader.load().then((saving, reject) => {
    return saving; // saving объект класса GameSaving
  }).catch((error) => {
    console.log(`error ${error}`);
});