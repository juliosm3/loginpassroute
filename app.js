const express = require('express');
const dotenv = require('dotenv');
const middlewares = require('./middlewares.js');
const routes = require('./routes.js');
dotenv.config();
const app = express();
const PORT = 3000;


middlewares.setupApp(app);
routes.setup(app);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});


