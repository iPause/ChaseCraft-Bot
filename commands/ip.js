const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

let join = new Discord.RichEmbed()
.setTitle("To Join **ChaseCraft** Java Edition:")
.setColor(config.embedcolor)
.setDescription(`**1.** You must have the game version **1.14.1** installed. (we also support 1.8 to 1.14.1).\n   *Keep in mind that the Creative server only supports versions **1.12.2 to 1.14**.* \n\n **2.** Click the **PLAY** button, wait for the Minecraft game to load.\n\n**3.** Choose: **Multiplayer** \n\n**4.** Click the button "**Direct connect**", or if you want to keep the server in its list, press the button "**Add server**"\n\n**5.** In the field "**Server address**" write: **play.chasecraft.gg**\n\n*play.chasecraft.gg*`)

message.channel.send(join);



}

module.exports.config = {
  name: "ip",
  aliases: [""]
}
