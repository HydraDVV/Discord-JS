const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');//Hydra

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın!`)//Hydra
if (!args[0])  {
    message.channel.send(` Açmalı veya Kapatmalısın! | \`${prefix}reklamengelle aç veya kapat\``)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, ' **Reklam Engel Aktif!**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    message.channel.send(' Reklam Engel Başarıyla Aktif Edildi!')//Hydra

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

    message.channel.send(' Reklam Engel Başarıyla Kapatıldı!')
  }

  
  
  
};
exports.config = {
 name: 'reklamengelle',
  aliases: ['reklam-engel',"reklamengel","reklam-engelle"]

};//Hydra