const path = require('path');
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN);

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

console.log(path.join(__dirname, '/1px.png'));
  let bufs = [];
  const data = fs.readFile(path.join(__dirname, '/1px.png'), (error, data) => {
    bufs.push(data);
    bot.sendPhoto(chatId, Buffer.concat(bufs));
  });
});

bot.startPolling();

