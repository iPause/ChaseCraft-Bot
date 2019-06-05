const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {;


  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("You do not have access to this command.");

  let say = args.join(" ");
  message.delete().catch();
  message.channel.send(say);
  console.log(`${message.author.tag} ran the \"SAY\" command.`)

}

module.exports.config = {
  name: "say",
  aliases: [""]
}
