const db = require('../db');

const Topic = {
  getAll: (callback) => {
    // Estiramos los topics en orden descedente
    db.all('SELECT * FROM topics ORDER BY votes DESC', callback);
  },
  add: (topic, callback) => {
    db.run('INSERT INTO topics (topic) VALUES (?)', [topic], callback);
  },
  vote: (id, callback) => {
    db.run('UPDATE topics SET votes = votes + 1 WHERE id = ?', [id], callback);
  },
  delete: (id, callback) => {
    db.run('DELETE FROM topics WHERE id = ?', [id], callback);
  }
};

module.exports = Topic;
