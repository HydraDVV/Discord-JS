const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`Bu komutu kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısın!`)//Hydra
 
 let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });


  message.channel.send(`Sohbet kanalı Başarıyla Açıldı!`)
}

exports.config = {
name: "sohbet-aç",
aliases: ["sohbetaç"]
};//Hydra