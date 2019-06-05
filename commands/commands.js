const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  let BotIcon = bot.user.displayAvatarURL;
  let CommandsEmbed = new Discord.RichEmbed()
  .setAuthor(`Commands For ${config.botname}:`, BotIcon)
  .setColor(config.embedcolor)
  .addField("!8ball [question]", "Shows your fortune!")
  .addField("!apply", "Sends information on how to apply!")
  .addField("!avatar [user]", "Displays the specified user's avatar!")
  .addField("!botinfo", "Displays all information about the bot!")
  .addField("!botping", "Displays the the bot's ping!")
  .addField("!bug [bug]", `Sends the bug you found to #bug-reports!`)
  .addField("!commands", "Displays this message!")
  .addField("!donate", "Sends information on how to donate!")
  .addField("!ip", "Shows how to join the server!")
  .addField("!online", "Displays the total member count!")
  .addField("!staffhelp", "Displays the staff commands!")
  .addField("!serverstatus", "Displays the server's status!")
  .addField("!suggest [suggestion]", `Sends your suggestion to #suggestions!`)
  .addField("!uptime", "Displays the bot's uptime!")
  .addField("!website", "Sends a link to our awesome website!")
  .setTimestamp()


  //console.log(`${message.author.tag} ran the \"COMMANDS\" command.`)
  message.channel.send(CommandsEmbed);

}

module.exports.config = {
  name: "commands",
  aliases: [""]
}
