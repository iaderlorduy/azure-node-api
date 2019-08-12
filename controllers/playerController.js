/* eslint-disable class-methods-use-this */
import playerService from '../services/playerService';

class PlayerController {
  getPlayers(req, res) {
    playerService.getPlayers(req, res);
  }

  createPlayer(req, res) {
    playerService.createPlayer(req, res);
  }

  getPlayerById(req, res) {
    playerService.getPlayerById(req, res);
  }

  updatePlayer(req, res) {
    playerService.updatePlayer(req, res);
  }
}

export default new PlayerController();
