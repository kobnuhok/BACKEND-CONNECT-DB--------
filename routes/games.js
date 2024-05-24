const express = require('express');
const gamesRouter = express.Router();
const { checkAuth } = require("../middlewares/auth.js")

const {
  findAllGames,
  createGame,
  findGameById,
  checkIsVoteRequest,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkIsGameExists,
} = require('../middlewares/games');

const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted
} = require('../controllers/games');



gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  checkIsGameExists,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated,
);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkAuth
);

gamesRouter.delete(
  "/games/:id",
  checkAuth,
  findGameById,
  deleteGame,
  sendGameDeleted
);

module.exports = gamesRouter;
