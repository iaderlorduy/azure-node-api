let express = require('express');
let HttpStatus = require('http-status-codes');

let app = express();
var port = process.env.PORT || 1337;

app.get('/', (req, res) => {
  return res.send('hola a todos');
})

app.listen(PORT, () => {
  console.info(`Server has started on ${PORT}`)
})
