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
    let test = req.body;
    bot.response(test)
        .then(response => {
            res.json({
                text: response
            })
        })
      
});

module.exports = botRouter;