const express = require('express');
const app = express();
const { topicData } = require('./db/data/development-data/topics');

app.get('/api/topics', (req, res) => {
    const topics = topicData
    res.status(200).send(topics)
  });
  





  module.exports = {app}