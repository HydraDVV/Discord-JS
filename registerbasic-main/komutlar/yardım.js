const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const ayarlar = require('../ayarlar.json');


module.exports.run = async (client, message, args) => {

      

  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setColor('2f3136')
    .addField(`Komutlar`, `Register BOT`)
    .addField(`Erkek Kayıt`, `.e @etiket İsim Yaş`, true)
    .addField(`Kadın Kayıt`, `.k @etiket İsim Yaş`, true)
    .addField(`Kayıtsıza Atma`, `.unregister @etiket`, true)
    .addField(`İsim Değiştirme`, `.nick @etiket İsim Yaş`, true)
           message.channel.send(embed)

}
    
    
    exports.conf = { 
        enabled: true, 
        guildOnly: true, 
        aliases: ["yardım", "help", "h", "y"]
        }
        
        exports.help = {
        name: "yardım",
        }
