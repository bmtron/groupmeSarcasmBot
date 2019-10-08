const botService = {
    getResponse(db) {
        return db.select('*').from('bot_response')
    },
    addNewResponse(db, res) {
        return db.insert(res).into('bot_response').returning('*').then(rows => {
            return rows[0]
        })
    }
}

module.exports = botService;