const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  message.delete().catch();
  if(!args[0]) return message.author.send("Try !suggest [message]");
  if(!args[1]) return message.author.send("Please explain your suggestion in more detail!");

  let suggest = args.join(" ")
  let suggestion = new Discord.RichEmbed()
  .setAuthor(`New Suggestion from: ${message.author.username}`, message.author.avatarURL)
  .setDescription(suggest)
  .setColor(config.embedcolor)
  .setFooter("Command: !suggest [suggestion]")
  .setTimestamp();

  let suggestChannel = message.guild.channels.find(x => x.name === config.suggestch);
  if(!suggestChannel) return message.channel.send("Can't find a suggestion channel.");;

  let msg = await suggestChannel.send(suggestion);
  await msg.react(`✅`);
  await msg.react(`❌`);
  message.author.send("Suggestion Submitted. Thank you for your feedback!");
}

module.exports.config = {
  name: "suggest",
  aliases: [""]
}
