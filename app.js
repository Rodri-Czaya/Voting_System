const express = require('express');
const topicController = require('./controllers/topicController'); // Importar el controlador
const app = express();

app.set('view engine', 'ejs'); // Establecemos EJS como nuestro template engine
app.use(express.urlencoded({ extended: true })); // Middleware parser

// Definimos rutas y linkeamos a funciones de nuestro controlador
app.get('/', topicController.showAll); // Muestra los topics y votos
app.post('/add', topicController.addTopic); // Agrega topics
app.post('/vote/:id', topicController.voteTopic); // Vota por un topic
app.post('/delete/:id', topicController.deleteTopic); // Borra un topic

// Inicializamos el servidor
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
