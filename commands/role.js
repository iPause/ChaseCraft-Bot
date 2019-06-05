const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;

  message.delete().catch(O_o=> {});
  let embed = new Discord.RichEmbed()
  .setColor(role.hexColor)
  .setTitle(`**ROLE CHECK**`)
  .addField('Name', role.name)
  .addField('Members', role.members.size)
  .addField('Hex', role.hexColor)
  .addField('Creation Date', role.createdAt.toDateString())
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.username}`);

 console.log(`${message.author.tag} ran the \"ROLE\" command.`)
 message.channel.send(embed);

}

module.exports.config = {
  name: "role",
  aliases: [""]
}
