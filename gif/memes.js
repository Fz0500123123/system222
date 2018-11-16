const Discord = require("discord.js");
const client = new Discord.Client();
const cooldown = new Set()
exports.run = (client, message, args) => {
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
    const memelink = [
      "https://memegenerator.net/img/instances/15928166/sir-t7awa-chokran.jpg",
      "https://akphoto1.ask.fm/505/448/879/1000003032-1s8gfrm-kocarkpj7k4tqfp/original/avatar.jpg",
      "http://4.bp.blogspot.com/-rhHsVNXQ2oU/Uk_86Z12vKI/AAAAAAAAA9w/0sHXwGpNr3c/s1600/18.jpg",
      "https://akphoto1.ask.fm/766/060/876/1940003029-1ro78pc-hfjndmrb9788ia0/original/avatar.jpg",
      "https://akphoto1.ask.fm/453/690/687/910003021-1ro2jg7-1n35gmhng21fehf/original/10013498_540977902684612_949563834_n.jpg",
      "https://akphoto1.ask.fm/500/602/583/710003008-1root3d-fhchao5pho0dcna/original/945365_127719630770440_1060377102_n.png",
      "http://m.memegen.com/vb17r9.jpg",
      "https://akphoto1.ask.fm/729/252/967/80003007-1r734o0-c2mt5jjkpgenmf0/original/1236497_10200742376350768_1613765360_n.jpg",
      "https://akphoto1.ask.fm/275/735/012/90003001-1qqt1ai-a7mgkm0kkm17sqk/original/file.jpg",
      "https://i.skyrock.net/2200/21052200/pics/2476029127_small_1.jpg",
      "https://i.skyrock.net/8525/67738525/pics/2924088101_1_3.jpg",
      "https://akphoto1.ask.fm/316/403/344/1280003018-1rfg7kb-atk33fpl70efmrf/original/1378946_228133870698807_1278967817_n.jpg",
      "https://akphoto1.ask.fm/534/484/982/100003014-1ra1tdp-g51ot6jr7hje7na/original/Obamayoushutup.jpg",
      "https://memegenerator.net/img/instances/28296078.jpg",
      "https://cdn.steemitimages.com/DQmd87Hyt2eE5SvZmzcjwx4sMJuxjf56RQ6cN9G7ABSKCfG/Sorry.jpg",
      "http://theawesomedaily.com/wp-content/uploads/2017/04/funny-memes-about-girls-feat-620x400.jpg",
      "https://akphoto1.ask.fm/150/423/246/1650003003-1qljk0l-ilqpi7bfph8cjpp/original/559724_220919194731139_284087956_n.jpg",
      "https://i.redd.it/kaodxxqzopp01.jpg",
      "https://i.redd.it/1x5cuxl31qp01.jpg",
      "https://i.imgur.com/qxfY8YT.jpg",
      "https://i.imgur.com/t0buEyF.jpg",
      "https://i.imgflip.com/27lvbi.jpg",
      "https://i.imgur.com/qxfY8YT.jpg",
      "https://i.imgflip.com/2a9tt3.jpg",
      "https://i.imgflip.com/27mlwf.jpg",
      "https://i.imgflip.com/273fnp.jpg",
      "https://i.redd.it/1kanjqj6ybp01.png",
      "https://i.imgflip.com/2a7fq9.jpg",
      "https://i.imgflip.com/27roeu.jpg",
      "https://i.redd.it/kaodxxqzopp01.jpg",
      "https://i.redd.it/kaodxxqzopp01.jpg",
      "https://i.imgflip.com/2722kl.jpg",
      "https://i.imgflip.com/2720a7.gif",
      "https://i.redd.it/d5yh3gpalrp01.jpg",
      "https://i.redd.it/gp99l6j56yp01.jpg",
      "https://i.imgflip.com/273oj7.jpg",
      "https://i.imgflip.com/2732hh.jpg",
      "https://i.imgflip.com/26va8w.jpg",
      "https://i.redd.it/dx1dtup9d5p01.jpg",
      "https://i.imgflip.com/27kssp.jpg",
      "https://i.imgflip.com/27kaxi.jpg",
      "https://i.imgflip.com/252eto.jpg",
      "https://i.imgflip.com/272snf.jpg",
        "https://cdn.discordapp.com/attachments/410071452356968459/413232381852647426/image.jpg",
        "https://cdn.discordapp.com/attachments/412534146502492181/413708097706786827/progress_o_7034053.png",
        "https://cdn.discordapp.com/attachments/412976572895854602/413708784104374282/iceland-are-you-stupid_o_4376721.png",
        "https://img.memecdn.com/football-vs-real-football_o_7212543.jpg",
        "https://cdn.discordapp.com/attachments/412976572895854602/413709813529313280/stoner-stanley-amp-039-s-football_o_2076057.png",
        "https://cdn.discordapp.com/attachments/412976572895854602/413710569317728266/whom-did-this_o_7200705.png",
        "https://cdn.discordapp.com/attachments/412976572895854602/413710891301994497/women-football_c_2612677.png",
        "https://cdn.discordapp.com/attachments/409825929385345035/413712273027104768/13307204_1213256318692790_6353798062515658926_n.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413712292484612117/13343027_360417004082191_1927535344955469183_n_1.png",
        "https://cdn.discordapp.com/attachments/409825929385345035/413714896136437780/13880251_1067413463307733_371667983216450047_n.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413714930835914752/14670725_516546798549418_895103339277372496_n.png",
        "https://cdn.discordapp.com/attachments/409825929385345035/413714978818883585/14720343_518450301692401_7068157654463036939_n.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413715656010104833/FB_IMG_1478782772531.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413715757768114186/25975468_525297834501738_410026436_n.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413716069556027393/4aa.jpg",
        "https://cdn.discordapp.com/attachments/409825929385345035/413712281143345172/13331040_1213254095359679_2742959799940034353_n.jpg",
        "https://cdn.discordapp.com/attachments/412534146502492181/414045635189407777/Types_of_Headaches_03022018101727.jpg",
        "https://cdn.discordapp.com/attachments/412534146502492181/414045588078723075/e58a88f370361f24ac0f678af6eb0e6d.png",
        "https://cdn.discordapp.com/attachments/412534146502492181/414045577492299777/FB_IMG_1515082971335.jpg",
        "https://cdn.discordapp.com/attachments/412534146502492181/414045542146899978/brazzers_way.png",
        "https://cdn.discordapp.com/attachments/412534146502492181/414046110739595265/image.png",
        "https://cdn.discordapp.com/attachments/412534146502492181/414046048999440385/FB_IMG_1509883509075.jpg",
        "https://cdn.discordapp.com/attachments/414046255078178816/414046271536627722/407788.jpg",
        "https://cdn.discordapp.com/attachments/412534146502492181/414047389985406977/0iQNqgj.png"];
       message.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
