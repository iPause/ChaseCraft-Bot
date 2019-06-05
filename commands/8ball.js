const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  if(!args[2])
    return message.channel.send("I'm afraid I don't have enough information!").then(msg => msg.delete(10000));;

  let replies = ["Yes!", "No.", "Most likely not.", "Quite Possibly.", "Please ask again later, I'm too tired.", "You wish!", "My sources say no...", "Absofruitly", "Duh", "No, just, no."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setTitle(":8ball: 8Ball says...")
  .setColor(config.embedcolor)
  .setDescription(replies[result]);

  console.log(`${message.author.tag} ran the \"8BALL\" command.`)
  message.channel.send(ballembed);


}

module.exports.config = {
    name: "8ball",
    aliases: [""]
}
