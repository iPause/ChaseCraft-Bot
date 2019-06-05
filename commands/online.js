const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  let sicon = message.guild.iconURL;
	let OnlineEmbed = new Discord.RichEmbed()
		.setTitle(`${config.botname} Member Count`)
		.setColor(config.embedcolor)
    .setThumbnail(sicon)
    .addField(`Online`, `${message.guild.members.filter(o => o.presence.status === 'online').size}`)
    .addField(`Away`, `${message.guild.members.filter(i => i.presence.status === 'idle').size}`)
    .addField(`Do Not Disturb`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}`)
    .addField(`Offline`, `${message.guild.members.filter(off => off.presence.status === 'offline').size}`)
    .setFooter(`Total Members: ${message.guild.memberCount}`);

  console.log(`${message.author.tag} ran the \"ONLINE\" command.`)
  message.channel.send(OnlineEmbed);

}

module.exports.config = {
  name: "online",
  aliases: [""]
}
