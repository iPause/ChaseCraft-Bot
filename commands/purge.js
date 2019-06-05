const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(config.noperms);

  if(!args[0])
    return message.channel.send("Not enough arguments.").then(msg => msg.delete(10000));

  message.delete().catch();
  message.channel.bulkDelete(args[0]).then(() => {
  console.log(`${message.author.tag} ran the \"PURGE\" command.`)
  message.channel.send(`Completed! Cleared *${args[0]}* messages.`).then(msg => msg.delete(10000));
  });
}

module.exports.config = {
  name: "purge",
  aliases: [""]
}
