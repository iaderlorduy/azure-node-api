/* eslint-disable class-methods-use-this */
import gameService from '../services/gameService';

class GameController {
  getGames(req, res) {
    gameService.getGames(req, res);
  }

  createGame(req, res) {
    gameService.createGame(req, res);
  }

  getGameById(req, res) {
    gameService.getGameById(req, res);
  }

  updateGame(req, res) {
    gameService.updateGame(req, res);
  }
}

export default new GameController();
