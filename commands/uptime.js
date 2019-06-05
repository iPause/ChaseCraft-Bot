const Discord = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");

module.exports.run = async (bot, message, args) => {

    const duration = moment.duration(bot.uptime).format(" D[d], H[h], m[m], s[s]");
    message.channel.send(`I have been online for: ${duration}!`);

}

module.exports.config = {
  name: "uptime",
  aliases: [""]

}
