const Discord = require('discord.js');
const request = require('request')
const fynx =require("../ayarlar.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(` **Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
            message.channel.send(`Bir Sayı Giriniz! | \`${prefix}yavaşmod [0/120]\``)
            return
          }
if (limit > 120) {
    return message.channel.send("Süre Limiti Maksimum **120** Saniye Olabilir.");
}
   message.channel.send(`Yazma Süre Limiti **${limit}** Saniye Olarak Ayarlanmıştır.`);
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.config = {
name: "yavaşmod",
aliases: ["slowmode", "yavaşmod"]
}//Hydra