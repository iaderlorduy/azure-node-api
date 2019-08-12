import express from 'express';
import playerController from '../controllers/playerController';

const playerRouter = express.Router();
playerRouter.get('/players', (req, res) => playerController.getPlayers(req, res));
playerRouter.post('/player', (req, res) => playerController.createPlayer(req, res));
playerRouter.get('/player/:id', (req, res) => playerController.getPlayerById(req, res));
playerRouter.put('/player/:id', (req, res) => playerController.updatePlayer(req, res));
export default playerRouter;
