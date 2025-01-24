import GameSavingLoader from "./gamesaving.js";

GameSavingLoader.load().then((saving) => {
    return saving; // saving объект класса GameSaving
  });