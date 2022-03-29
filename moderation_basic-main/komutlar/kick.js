const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Bu komutu kullanabilmek için "\`Üyeleri At\`" yetkisine sahip olmalısın!')//Hydra

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(` Mod log kanalı ayarlanmamış ayarlamak için | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('Lütfen atmak istediğiniz kullanıcıyı etiketleyin!');
  if (reason.length < 1) return message.channel.send(' Atılma sebebinizi giriniz!');
  if (user.id === message.author.id) return message.channel.send('Kendini Atamazsın!');

  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .addField('İşlem', 'Sunucudan Atma')
  .addField('Atılan Üye', `${user.tag} (${user.id})`)
  .addField('Atan Yetkili', `${message.author}`)
  .addField('Atma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  user.send(`**${message.guild.name}** Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Atıldınız! \n Yetkilinin Girdiği Sebep: **${reason}**`)//Hydra

  message.guild.member(user).kick();
  
  message.channel.send(`Kullanıcı başarıyla atıldı!`)//Hydra
  

};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

