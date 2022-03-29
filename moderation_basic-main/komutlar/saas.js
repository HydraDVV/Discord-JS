const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  
  if (!args[0]) return message.channel.send(` Açmalı veya Kapatmalısın! | \`${prefix}sa-as aç veya kapat\``)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`  Sa-As Sistemini Başarıyla Açıldı! Kapatmak İçin \`${prefix}sa-as kapat\` yazmalısın!`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(` Sa-As Sistemi Başarıyla Kapatıldı!`)

  }
 
}
exports.config = {
  name: 'sa-as',
  aliases: ['sa-as-sistemi',"saas"]
};
