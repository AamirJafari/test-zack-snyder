const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
// This file would be created soon

 
require('dotenv').config();
 

let bot;
 
if (process.env.NODE_ENV === 'production') {
   bot = new TelegramBot(token);
   bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
   bot = new TelegramBot(token, { polling: true });
}

bot.onText(/\/word (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const word = match[1];
    bot.sendMessage(chatId, "NO");
  });

  const express = require('express')
const bodyParser = require('body-parser');
 
const app = express();
 
app.use(bodyParser.json());
 
app.listen(process.env.PORT);
 
app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});
