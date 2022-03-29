const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(` Bu komutu kullanabilmek için "\`Üyeleri Engelle\`" yetkisine sahip olmalısın!`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`  Mod log kanalı ayarlanmamış ayarlamak için | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send(' Lütfen banını açmak istediğiniz üyeninin ID sini girin!');
  if (reason.length < 1) return message.channel.send(' Lütfen sebep giriniz!');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .addField(' İşlem', 'Ban Kaldırma')
  .addField(' Banı Açılan Üyenin ID`si', `(${user})`)
  .addField(' Banı Açan Yetkili', `${message.author}`)
  .addField(' Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
 
  message.channel.send(` Belirtiğiniz İD'nin Banı Açıldı!`)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
//Hydra