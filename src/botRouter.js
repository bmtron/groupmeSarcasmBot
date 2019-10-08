const express = require('express')
const bot = require('./botScript')
const botService = require('./botService/botService')

const botRouter = express.Router()
const jsonParser = express.json()

botRouter.route('/')
.get((req, res, next) => {
    botService.getResponse(req.app.get('db')).then(items => {
        if(!items) {
            res.json('no items')
        }
        res.json(items)
    }).catch(next)
})
.post(jsonParser, (req, res, next) => {
    let test = req.body;
    bot.response(test).then(response => {
        res.json(response)
    })
});

module.exports = botRouter;