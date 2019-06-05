const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) =>{

    let allowedRole = message.guild.roles.find(x => x.name === "Staff");
    if(!message.member.roles.has(allowedRole.id))
        return message.channel.send(config.noperms)

    let BotIcon = bot.user.displayAvatarURL;
    let StaffhelpEmbed = new Discord.RichEmbed()
    .setAuthor(`Staff Commands for ${config.botname}:`, BotIcon)
    .setColor(config.embedcolor)
    .addField("!changelog [Server] [args]", "Mass deletes messages! [ADMINISTRATOR]")
    .addField("!purge [args]", "Mass deletes messages! [ADMINISTRATOR]")
    .addField("!say [args]", "Makes the bot say the specified message! [ADMINISTRATOR]")
    .addField("!sayembed [args]", "Makes the bot say an embedded message! [ADMINISTRATOR]")

  message.channel.send(StaffhelpEmbed);

}

module.exports.config = {
  name: "staffhelp",
  aliases: [""]
}
