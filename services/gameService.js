/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import Game from '../models/gameModel';
import Player from '../models/playerModel';

class GameService {
  async createGame(req, res) {
    if (!req.body.playerOneName || !req.body.playerTwoName) {
      res.status(400);
      return res.send('Players names are required');
    }
    const arrayNames = [
      { name: req.body.playerOneName },
      { name: req.body.playerTwoName },
    ];
    const response = await Player.insertMany(arrayNames, (err, players) => {
      if (err) {
        return res.send(err);
      }
      const newGame = new Game({
        playerOneId: players[0],
        playerTwoId: players[1],
      });
      newGame.save();
      res.status(201);
      return res.json(newGame);
    });
    return response;
  }

  async getGames(req, res) {
    const response = await Game.find((err, games) => {
      if (err) {
        return res.send(err);
      }
      return res.send(games);
    });
    return response;
  }

  async getGameById(req, res) {
    const response = await Game.findById(req.params.id, (err, games) => {
      if (err) {
        return res.send(err);
      }
      return res.send(games);
    });
    return response;
  }

  async updateGame(req, res) {
    if (!req.body.playerWinnerId) {
      res.status(400);
      return res.send('Player winner is required');
    }
    const game = await Game.findByIdAndUpdate(req.params.id, {
      playerWinnerId: req.body.playerWinnerId,
    }, (err, docs) => {
      if (err) {
        return res.send(err);
      }
      return res.send(docs);
    });

    return game;
  }
}

export default new GameService();
