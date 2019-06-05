const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(config.noperms);

  if(!args[0])
    return message.author.send("Usage: !changelog [Server] [Log]")

  let log = args.slice(1).join(" ")
  let LogEmbed = new Discord.RichEmbed()
  .setTitle("**NEW CHANGELOG**")
  .setColor("#3ee959")
  .addField("From", message.author, true)
  .addField("Server", `${args[0]}`, true)
  .addField("Log", log)
  .setTimestamp();

  message.delete().catch();
  console.log(`${message.author.tag} ran the \"CHANGELOG\" command.`)
  message.channel.send(LogEmbed);

}

module.exports.config = {
  name: "changelog",
  aliases: [""]
}
