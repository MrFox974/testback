// handler.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
res.json({ message: 'Hello from Lambda v2' });
});

module.exports.handler = serverless(app);
