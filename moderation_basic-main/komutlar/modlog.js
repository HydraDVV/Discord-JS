const Discord = require('discord.js')
const db = require('quick.db')

const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın!`);//Hydra

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` Modlog kanalı zaten ayarlı değil ayarlamak için | ${ayarlar.prefix}modlog #kanal`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(` Mod-Log kanalı başarıyla sıfırlandı.`);
  
    return
  }
  
if (!logk) return message.channel.send(` Bir kanal belirtmelisin!`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(` Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`);
 message.react('607634966959882250')

};

exports.config = {
    name: "modlog",
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı']
}//Hydra