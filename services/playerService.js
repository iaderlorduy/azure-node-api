/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

import Player from '../models/playerModel';

class PlayerService {
  async createPlayer(req, res) {
    if (!req.body.name) {
      res.status(400);
      return res.send('Player names is required');
    }
    const newPlayer = new Player({
      name: req.body.name,
    });
    const response = await newPlayer.save((err, player) => {
      if (err) {
        return res.send(err);
      }
      return res.send(player);
    });
    return response;
  }

  async getPlayers(req, res) {
    const response = await Player.find((err, players) => {
      if (err) {
        return res.send(err);
      }
      return res.send(players);
    });
    return response;
  }

  async getPlayerById(req, res) {
    const response = await Player.findById(req.params.id, (err, players) => {
      if (err) {
        return res.send(err);
      }
      return res.send(players);
    });
    return response;
  }

  async updatePlayer(req, res) {
    if (!req.body.name) {
      res.status(400);
      return res.send('Player name is required');
    }
    const player = await Player.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    }, (err, docs) => {
      if (err) {
        return res.send(err);
      }
      return res.send(docs);
    });

    return player;
  }
}

export default new PlayerService();
