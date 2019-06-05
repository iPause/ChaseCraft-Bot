const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`:shopping_bags: ${message.author}, visit the ChaseCraft store @ (**<https://store.chasecraft.gg/>**).\nDirectly help the continued development of ChaseCraft by purchasing a store perk.\n\n*ChaseCraft aims to be EULA friendly. Pay2win is not what ChaseCraft is about, we strive for fairness!*`);

}

module.exports.config = {
  name: "store",
  aliases: [""]
}
