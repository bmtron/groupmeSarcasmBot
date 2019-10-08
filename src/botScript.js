const https = require('https')


    function respond(req) {
        let request = req;

        let sarcasticResponse = sarcastic(request.text)
        sendSarcasticMessage(sarcasticResponse);
        return request.text;
    }
    function sarcastic(str) {
        str = str.toLowerCase();
        str = str.split('');
      
        for (let i = 0; i < str.length - 1; i++) {
          let rand = Math.floor((Math.random() * 10) + 1);
          if (rand < 5) {
           str[i] = str[i].toUpperCase();
          }
        }
        str = str.join('')
        return str;
      }
    function sendSarcasticMessage(res) {
        
        let body = {
            "bot_id": process.env.BOT_ID,
            "text": `${res}`
        }
        let options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };
        let botReq = https.request(options, (res) => {
            if (res.statusCode == 202) {
                console.log(res.statusCode)
            }
            else {
                console.log('error ' + res.statusCode)
            }
        });
        botReq.end(JSON.stringify(body))
    }
const response = {
    response(req) {
        return respond(req)
    },
    test(req) {
        let test = new Promise((resolve, reject) => {
            resolve(req)
        })
        return test;
    }
}
module.exports = response;