const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  message.delete().catch();
  if(!args[0]) return message.author.send("Try !bug [message]");
  if(!args[1]) return message.author.send("Please explain your bug report in more detail!");

  let bug = args.join(" ")
  let bugEmbed = new Discord.RichEmbed()
  .setColor(config.embedcolor)
  .setAuthor(`New Bug Report from: ${message.author.username}`, message.author.avatarURL)
  .setDescription(bug)
  .setTimestamp()
  .setFooter("Command: !bug [bug]");

  let bugChannel = message.guild.channels.find(x => x.name === config.bugch);
  if(!bugChannel) return message.channel.send("Can't find a bug channel.");;
  let msg = await bugChannel.send(bugEmbed);
  message.author.send("Bug Report Submitted. Thank you for your feedback!");

}

module.exports.config = {
  name: "bug",
  aliases: [""]
}
