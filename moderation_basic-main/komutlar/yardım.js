const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('RANDOM') 
.setAuthor(`${client.user.username} Moderasyon Komutları`, client.user.avatarURL())
.addField(`__Moderasyon Komutları__`,` :dizzy:  \`${prefix}modlog\` | Sunucunuzda Moderasyon Kayıt Logununu Tuttar\n:dizzy: \`${prefix}ban\` | Sunucunuzda Belirtiğiniz Kişiyi Yasaklar\n:dizzy: \`${prefix}unban\` | Sunucunuzda Belirtiğiniz Kişinin Yasağını Kaldırır \n:dizzy: \`${prefix}kick\` | Sunucunuzda Belirtiğiniz Kişiyi Kickler\n:dizzy: \`${prefix}bansay\` | Sunucunuzdan Kaç Kişinin Yasaklandığını Gösterir\n:dizzy: \`${prefix}küfür-engel\` | Küfür Edilmesini Tamamen Yasaklar\n:dizzy: \`${prefix}reklam-engel\` | Reklam Yapılmasını Tamamen Yasaklar\n:dizzy: \`${prefix}reklam-kick\` | Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler\n:dizzy: \`${prefix}sil\` | Belirtiğiniz Kadar Mesaj Siler\n:dizzy: \`${prefix}afk\` | Afk Moduna Girersiniz\n:dizzy: \`${prefix}yavaşmod\` | Kanala Yazı Süre Limiti Koyar\n:dizzy: \`${prefix}sa-as\` | Sunucuzda Selam Verenlere Selam Verir\n:dizzy: \`${prefix}nuke\` | Kanalı Kapatır, Mesajları Siler ve Tekrardan Açar\n:dizzy: \`${prefix}sohbetaç\` | Sohbeti Açar ve Yazı Yazılabilir\n:dizzy: \`${prefix}sohbetkapa\` |  Sohbeti Kapatır ve Yazı Yazılamaz`)
.addField(`__Bilgilendirme__`,` :dizzy: \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir\n:dizzy: \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage('https://cdn.discordapp.com/attachments/840552683094016002/840682525563158528/hype.png')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: ["help"]
}//Hydra