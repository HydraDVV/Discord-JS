const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let mata = new Discord.MessageEmbed()
.setThumbnail(``)
.addField("__**Bot Verileri**__", ` **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Sahibi**__", ` **Bot Sahibi**  <@${ayarlar.sahip}> \n \n`)
.addField("__**Sürümler**__", ` **Discord.js Sürümü** **|**  **v${Discord.version}** \n **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", ` **${client.ws.ping}** ms`,true)
.setColor("BLUE")
message.channel.send(mata)
};

 exports.config = {
      name: 'bot-bilgi',
   aliases: ["botbilgi", "i", "istatistik", "bilgi"]//Hydra
 };//Hydra