const Topic = require('../models/topicModel');

const topicController = {
  showAll: (req, res) => {
    Topic.getAll((err, topics) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.render('index', { topics });
    });
  },
  addTopic: (req, res) => {
    const { topic } = req.body;
    Topic.add(topic, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.redirect('/');
    });
  },
  voteTopic: (req, res) => {
    const topicId = req.params.id;
    Topic.vote(topicId, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.redirect('/');
    });
  },
  deleteTopic: (req, res) => {
    const topicId = req.params.id;
    Topic.delete(topicId, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.redirect('/');
    });
  }
};

module.exports = topicController;
