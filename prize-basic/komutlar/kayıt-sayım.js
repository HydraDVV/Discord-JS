const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Bu komutu kullanmaya yetkin yok bu komutu sadece <@927308195767156796> Kullanabilmektedir!** '); 


  
let prize = db.fetch(`prize_kayıt`)
if (prize === null) prize = 0 || "Çekiliş Katılımcısı Rolünde kayıtlı olan üye yok.";
let activity = db.fetch(`activity_kayıt`)
if (activity === null) activity = 0 || "Etkinlik Katılımcısı Rolünde kayıtlı olan üye yok.";


  
var embed = new Discord.MessageEmbed()
  .addField(`<:sponsorr:967357249498525696> ・ Çekiliş Katılımcısı Rolünde Toplam Kayıt:`,`${prize}`)
  .addField(`<:dostlar:967195219995021332> ・ Etkinlik Katılımcısı Rolünde Toplam Kayıt:`,`${activity}`)
  .setColor("#ffc700")
  message.channel.send(embed)
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt'
};