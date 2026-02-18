const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

require('./database');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use('/api/productos', require('./routes/producto.routes'));

app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
