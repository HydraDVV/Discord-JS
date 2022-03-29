const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')


exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(' Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın!')//Hydra
  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!args[0]) {
 message.channel.send(` Açmalı veya Kapatmalısın! | \`${prefix}reklamkick aç veya kapat\``)
  } 

 if (args[0] == "aç") {
    db.set(`reklamkick_${message.guild.id}`, "acik");
    message.channel.send(
      ` Reklam kick sistemi açıldı. Reklam yapanlar **3** uyarıdan sonra atılacaktır!`
    );
  }
  if (args[0] == "kapat") {
    db.set(`reklamkick_${message.guild.id}`, "kapali");
    message.channel.send((` Reklam kick sistemi kapatıldı. Artık reklam yapanlar atılmayacak!`));
  }
 };

 exports.config = {
      name: 'reklam-kick',
   aliases: ["reklam-kick", "reklamkick", "kickreklam"]
 };//Hydra