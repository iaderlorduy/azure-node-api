// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import 'should';
import mongoose from 'mongoose';
import request from 'supertest';

const app = require('../app.js');

const Game = mongoose.model('Game');
const Player = mongoose.model('Player');

const agent = request.agent(app);

describe('Game Test', () => {
  it('Should allow to create a game and return read and _it', (done) => {
    const gamePost = {
      playerOneName: 'Carlos',
      playerTwoName: 'Juan',
    };

    agent.post('/api/games')
      .send(gamePost)
      .expect(200)
      .end((err, results) => {
        results.body.playerOneId.name.should.equal('Carlos');
        results.body.playerTwoId.name.should.equal('Juan');
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Game.deleteMany({}).exec();
    Player.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
