const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {;
  let target = message.mentions.users.first() || message.author;

  let avatarEmbed = new Discord.RichEmbed()
  .setTitle(`**${target.username}**'s avatar!`)
  .setColor(config.embedcolor)
  .setImage(target.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.username}`);


  console.log(`${message.author.tag} ran the \"AVATAR\" command.`)
  message.delete().catch();
  message.channel.send(avatarEmbed);

}

module.exports.config = {
    name: "avatar",
    aliases: [""]
}
