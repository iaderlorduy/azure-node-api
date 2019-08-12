import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

const { Schema } = mongoose;

const gameModel = new Schema({
  playerOneId: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    autopopulate: true,
  },
  playerTwoId: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    autopopulate: true,
  },
  playerWinnerId: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    autopopulate: true,
  },
  createdOn: { type: Date, default: Date.now },
});

gameModel.plugin(autopopulate);

const Game = mongoose.model('Game', gameModel);

export default Game;
