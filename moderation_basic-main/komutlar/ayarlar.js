const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 
let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
if (!message.guild) return;


const sayfa = [`**${message.guild.name}** | Sunucu Ayarları\n\n**Botun Prefixi:** \`${p}\`\n\n**Reklam Engel:** ${db.fetch(`reklamengel_${message.guild.id}`) ? `Açık` : `Kapalı` }\n\n**Küfür Engel:** ${db.fetch(`kufurE_${message.guild.id}`) ? `Açık ` : `Kapalı` }`] 
const ayarReis = new Discord.MessageEmbed() 
.setColor("BLUE") 
.setDescription(sayfa)
    .setTimestamp()
            .setFooter(`${client.user.username} | Gelişmiş Türkçe Bot` , client.user.avatarURL())
message.channel.send(ayarReis) 
}; 


exports.config = { 
name: "ayarlar",
aliases: ["sunucu-ayarları"]
}