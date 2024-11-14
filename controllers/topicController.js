const Topic = require('../models/topicModel');

const topicController = {
  showAll: function(req, res) {
    Topic.getAll(function(err, topics) {
      if (err) {
        return res.status(500).send("Error al obtener los temas.");
      }
      res.render('index', { topics });
    });
  },

  addTopic: function(req, res) {
    const { topic } = req.body;
    Topic.add(topic, function(err) {
      if (err) {
        return res.status(500).send("Error al agregar el tema.");
      }
      res.redirect('/');
    });
  },

  voteTopic: function(req, res) {
    const { id } = req.params;
    Topic.vote(id, function(err) {
      if (err) {
        return res.status(500).send("Error al votar por el tema.");
      }
      res.redirect('/');
    });
  },

  deleteTopic: function(req, res) {
    const { id } = req.params;
    Topic.delete(id, function(err) {
      if (err) {
        return res.status(500).send("Error al eliminar el tema.");
      }
      res.redirect('/');
    });
  }
};

module.exports = topicController;
