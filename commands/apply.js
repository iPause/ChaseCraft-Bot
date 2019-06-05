const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`:pencil: ${message.author}, you can apply for the Trainee position on the ChaseCraft forums. Please follow the link below: \n(**<https://chasecraft.gg/index.php?forums/applications/>**)\n\n*When applying, make sure you thoroughly read through the application format. This will give you a better chance of being accepted!*`);

}

module.exports.config = {
    name: "apply",
    aliases: [""]
}
