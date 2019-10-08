const express = require('express')
const bot = require('./botScript')

const botRouter = express.Router()
const jsonParser = express.json()

botRouter.route('/')
.get((req, res) => {
    let test = {
        text: "here"
    }
    res.json(test)
})
.post(jsonParser, (req, res, next) => {
    bot.response(req);
    let text = req.text
    res.status(201).json({
        text: text
    })
});

module.exports = botRouter;