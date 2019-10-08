const express = require('express')
const bot = require('./botScript')

const botRouter = express.Router()


botRouter.route('/')
.get((req, res) => {
    res.json('test')
})
.post((req, res) => {
    bot.response(req);
    
});

module.exports = botRouter;