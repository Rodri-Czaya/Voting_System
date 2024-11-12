const express = require('express');
const topicController = require('./controllers/topicController'); // Importing the topic controller
const app = express();

app.set('view engine', 'ejs'); // Setting EJS as the template engine
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Define routes and link them to controller functions
app.get('/', topicController.showAll); // Show all topics and votes
app.post('/add', topicController.addTopic); // Add a new topic
app.post('/vote/:id', topicController.voteTopic); // Vote for a topic
app.post('/delete/:id', topicController.deleteTopic); // Delete a topic

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
