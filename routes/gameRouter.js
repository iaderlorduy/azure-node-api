import express from 'express';
import gameController from '../controllers/gameController';

const gameRouter = express.Router();
gameRouter.get('/games', (req, res) => gameController.getGames(req, res));
gameRouter.post('/games', (req, res) => gameController.createGame(req, res));
gameRouter.get('/games/:id', (req, res) => gameController.getGameById(req, res));
gameRouter.put('/games/:id', (req, res) => gameController.updateGame(req, res));
export default gameRouter;
