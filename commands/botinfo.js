const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require("moment");
const m = require("moment-duration-format");
const {
    version
} = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let bicon = bot.user.displayAvatarURL;
    let os = require('os')
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor(config.embedcolor)
    .setThumbnail(bicon)
    .addField("Uptime ", `${duration}`, true)
    .addField("Ping", `${Math.round(bot.ping)}ms`, true)
    .addField("Servers Watching", `${bot.guilds.size}`, true)
    .addField("Channels Monitoring", `${bot.channels.size}`, true)
    .addField("Users Watching", `${bot.users.size}`, true)
    .addField("Discord.js", `v${version}`, true)
    .addField("Node", `${process.version}`, true)
    .addField("Platform", `\`\`${os.platform()}\`\``, true)
    .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .setFooter("Bot Created and Coded by pause");

    console.log(`${message.author.tag} ran the \"BOTINFO\" command.`)
    return message.channel.send(botembed);
}

module.exports.config = {
    name: "botinfo",
    aliases: [""]
}
