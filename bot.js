const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();;
const ms = require("ms");
//let profanities = ["fuck", "nigger", "https://", "porn", "cuck", "cunt", "nigga", "n1gger","f4ck", "fack", "http://, shit, damn, bitch, titty, fucc, niqqa"];

//COMMAND HANDLER
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    return console.log("Couldn't find commands.");
  }

  jsfile.forEach((f, i) =>{
    let pull = require(`./commands/${f}`);
    console.log(`${f} has been loaded!`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name)
    });
  });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

  let prefix = (config.prefix);
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

//ONLINE COUNT CHANNEL
// bot.on("message", async message => {
// let mcIP = (config.ip);
// let url = 'http://mcapi.us/server/status?ip=' + mcIP;
//
//   let {body} = await superagent
//     .get(url)
//
// message.guild.channels.get("VOICE_CHANNEL_ID").setName(`👥 In-Game: ${body.players.now}/${body.players.max}`);
// });

//EVENTS
bot.on("ready", async () => {
  console.log(`${bot.user.username} has been booted up.`);
  bot.user.setActivity(config.status,{type: config.activity});
});

//MEMBER ADD | ADDING ROLE
bot.on("guildMemberAdd", async member => {
  console.log(`${member.user} joined the server.`);
  member.addRole(member.guild.roles.find(x => x.name === config.joinrole));

  // let mCount = member.guild.members.filter(member => !member.user.bot).size;
  // member.guild.channels.get("VOICE_CHANNEL_ID").setName(`🆕 Total Members: ${mCount}`);

  let WChannel = member.guild.channels.find(x => x.name === config.welcomech);
  WChannel.send(`Welcome, ${member.user}, to the **ChaseCraft Discord**!\n\n▪**STORE** <https://store.chasecraft.gg/>\n▪**WEBSITE** <https://www.chasecraft.gg>\n▪**SERVER** play.chasecraft.gg\n\n*Read the rules @ https://chasecraft.gg/index.php?forums/rules/*`);
});


//MEMBER LEAVE
// bot.on("guildMemberRemove", async member => {
//   let mCount = member.guild.members.filter(member => !member.user.bot).size;
//   member.guild.channels.get("VOICE_CHANNEL_ID").setName(`🆕 Total Members: ${mCount}`);
// });


//DELETED MESSAGE LOG
bot.on("messageDelete", async message => {
  let msg = message.content.toLowerCase();
  if(message.author.bot || message.content.startsWith("!")) return;
  let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#fc3c3c")
  .addField("Author", message.author.tag, true)
  .addField("Channel", message.channel, true)
  .addField("Message", message.content)
  .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
  let DeleteChannel = message.guild.channels.find(x => x.name === config.deletech);
  DeleteChannel.send(DeleteEmbed);
});


//SUGGESTION AND BUG-REPORT CHANNELS
bot.on("message", async message => {
  let schannel = message.guild.channels.find(channel => channel.name === "suggestions");
  if(message.member.hasPermission("ADMINISTRATOR")) return
  else if(!schannel) return console.log(`There is no suggestions channel!`);;
  if (message.channel != schannel || message.author.bot || message.content.startsWith("!suggest")) return;
  else message.delete().catch(O_o=> {});
});
bot.on("message", async message => {
  let bchannel = message.guild.channels.find(channel => channel.name === "bug-reports");
  if(message.member.hasPermission("ADMINISTRATOR")) return
  else if(!bchannel) return console.log(`There is no bug-reports channel!`);;
  if (message.channel != bchannel || message.author.bot || message.content.startsWith("!bug")) return;
  else message.delete().catch(O_o=> {});
});

// let profanities = ["https://", "http://"];
// //CHAT FILTER
// bot.on('message', async message => {
//     let msg = message.content.toLowerCase();
//     let allowedRole = message.guild.roles.find(x => x.name === "Staff");
//     let staffchat = message.guild.channels.find(x => x.name === "staff-chat");
//     let support = message.guild.channels.find(x => x.name === "support");
//     if(message.channel.id === staffchat.id || message.author.bot || message.member.roles.has(allowedRole.id)) return;
//     if(message.member.hasPermission("ADMINISTRATOR")) return
//     if(message.channel.id === staffchat.id || message.channel.id === support.id) return;
//     for (x = 0; x < profanities.length; x++) {
//         if (msg.includes(profanities[x])){
//             message.delete()
//             return;
//         }
//     }
// });


//LOGIN
bot.on('error', error => { console.log(error) });
bot.login(config.token);
