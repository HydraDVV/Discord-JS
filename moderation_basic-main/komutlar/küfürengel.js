
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın!`)//Hydra
if (!args[0])  {
    message.channel.send(` Açmalı veya Kapatmalısın! | \`${prefix}küfürengel aç veya kapat\``)

  }   
  if (args [0] == 'aç') {
    db.set(`kufurE_${message.guild.id}`, 'Küfür Engel Aktif!')
    let lus = await db.fetch(`kufurE_${message.guild.id}`)
    
    message.channel.send('Küfür Engel Başarıyla Açıldı!')//Hydra

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`kufurE_${message.guild.id}`)

    message.channel.send('Küfür Engel Başarıyla Kapatıldı!')//Hydra
  }

  
  
  
};
exports.config = {
 name: 'küfürengel',
  aliases: ['küfür-engel',"küfürengelle","küfür-engelle"]

};
//Hydra