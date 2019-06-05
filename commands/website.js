const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`:desktop: ${message.author}, visit the ChaseCraft website @ (**<https://chasecraft.gg/>**).\nFind all the latest news, updates and chat with the community on our forums.\n\n*Make sure to register an account to chat with the community and view certain forums!*`);

}

module.exports.config = {
  name: "website",
  aliases: [""]
}
