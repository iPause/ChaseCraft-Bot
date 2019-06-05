const Discord = require('discord.js')
const superagent = require("superagent");
const moment = require("moment");
const m = require("moment-duration-format");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

let mcIP = (config.ip);
let url = 'http://mcapi.us/server/status?ip=' + mcIP;


  let {body} = await superagent
    .get(url)

  const duration = moment.duration(body.duration).format(" D [days], H [hrs], m [mins], s [secs]");
  let statusEmbed = new Discord.RichEmbed()
  .setTitle(`${config.botname} Server Status`)
  .setColor(config.embedcolor)
  .addField("Online Players", `${body.players.now}/${body.players.max}`)
  .addField("Uptime", `${duration}`)
  .addField("Version", body.server.name)
  .setTimestamp();

      message.channel.send(statusEmbed);

}

module.exports.config = {
  name: "serverstatus",
  aliases: [""]

}
