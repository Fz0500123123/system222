const Discord = require("discord.js");
const client = new Discord.Client();
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
  let poke = [
    "https://cdn.discordapp.com/attachments/467499708068265994/467507303432585227/poke-rJzUe1FwZ.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509021793058857/poke-B14SJlTQG.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509321412902922/poke-HJZpLxkKDb.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509460458405888/poke-SydLxJFwW.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509552024256515/poke-BJhIekKwb.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509933626097674/poke-B1oSgytwW.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509931084480522/poke-r1v6xoh0Z.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509944338481152/poke-H1fMRpYtb.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467509925052940288/poke-rkB8eJYPZ.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467511056240082954/poke-rJ0hlsnR-.gif",
    "https://cdn.discordapp.com/attachments/467499708068265994/467511147927699474/poke-H1x2HxyYD-.gif",
    "https://cdn.weeb.sh/images/rkeaUeJKD-.gif",
    "https://cdn.weeb.sh/images/HkxwlkKPb.gif",
    "https://cdn.weeb.sh/images/SyQzRaFFb.gif",
    "https://cdn.weeb.sh/images/rkaUe1YPb.gif",
    "https://cdn.weeb.sh/images/BkcSekKwb.gif",
  ]
  let poke1 = Math.floor((Math.random() * poke.length));
  if (!args[0]) {

    message.channel.send('You did not mention any one')


    return;
 }
  if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
    const hembed = new Discord.RichEmbed()
    .setColor("RANDOM")
      .setTitle(`**${message.author.username}** abdo has been poked **${message.mentions.members.first().user.username}**`)
      .setImage(poke[poke1])
    message.channel.send({
      embed: hembed
    })
    return;
  }

  message.channel.send("You can't poked yourself!")
}
