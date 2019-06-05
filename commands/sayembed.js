const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {;

  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("You do not have access to this command.");

  message.delete().catch();
  let Message = args.join(" ");
  let SayEmbed = new Discord.RichEmbed()
    .setColor(config.embedcolor)
    .setDescription(Message);

    console.log(`${message.author.tag} ran the \"SAYEMBED\" command.`)
    return message.channel.send(SayEmbed);
}

module.exports.config = {
  name: "sayembed",
  aliases: [""]
}
