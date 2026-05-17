crequire("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(
    msg.chat.id,
    "Vítej v Rozpočetníku 🚀"
  );

});

console.log("Bot běží...");onst TelegramBot = require("node-telegram-bot-api");

const token = "8827922242:AAG8zkX5SfKIl6GJNeGu3DJpNoJxz7EwJh4";

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(
    msg.chat.id,
    "Vítej v Rozpočetníku 🚀"
  );

});

console.log("Bot běží...");

