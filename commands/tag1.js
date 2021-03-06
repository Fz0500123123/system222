const Discord = require("discord.js");
const client = new Discord.Client();
const figlet = require('figlet');
const cooldown = new Set()
exports.run = (client, message, argss) => {
          if(message.author.bot) return;
          if (cooldown.has(message.author.id)) {
    return message.reply("Please wait 5 seconds a next command").then(message => {
     message.delete(5000) 
    })
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
        let customemoji = client.emojis.find(r => r.name === '463763583864406056');
        if(!message.channel.guild) return message.reply(`This command is for guilds only! ${customemoji}`);

  let args = message.content.split(" ").slice(1);

  var maxLen = 25 // You can modify the max characters here

  if(args.join(' ').length > maxLen) {
    message.delete(5000);
    return message.reply('Please use less than ' + maxLen + " characters")
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if(!args[0]) {
    message.delete(5000);
    return message.reply(`Usage: \`ascii <text>\``)
      .then(message => {message.delete(5000)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          log.run(1, commandAscii, err);
          return;
      }
      message.reply(`\n\n\`\`\`fix
${data} 
\`\`\``);
  });
}
