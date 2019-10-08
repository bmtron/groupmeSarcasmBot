const express = require('express')
const bot = require('./botScript')
const botRouter = express.Router();


botRouter.route('/')
.post((req, res) => {
    bot.respond();
});

module.exports = botRouter;