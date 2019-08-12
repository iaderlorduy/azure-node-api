// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import sinon from 'sinon';
import { } from 'should';
import gameController from '../controllers/gameController';

describe('Game Controller Tests: ', () => {
  describe('Post', () => {
    it('Should not allow create a game with an empty players name', () => {
      // eslint-disable-next-line func-names

      const req = {
        body: {
          playerOneName: 'name test',
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      gameController.createGame(req, res);
      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Players names are required').should.equal(true);
    });
  });
});
