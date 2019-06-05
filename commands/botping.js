const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {;


  message.delete().catch(O_o=>{});
  const m = await message.channel.send("Pinging...");
  m.edit(`Ping: **${m.createdTimestamp - message.createdTimestamp}**ms | Discord API: **${Math.round(bot.ping)}**ms`);
}

module.exports.config = {
  name: "botping",
  aliases: [""]
}
