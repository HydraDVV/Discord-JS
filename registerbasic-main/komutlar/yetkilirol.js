const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
     if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send(`**Lütfen Bir Kişi Etiketleyin!**`).then(x => x.delete({timeout: 5000}));



if(member.roles.cache.has(ayarlar.yetkilirol)) 
  return message.channel.send(new MessageEmbed()
                              
 .setDescription(`Kullanıcıdan başarıyla <@&${ayarlar.yetkilirol}> rolü alındı!`)).then(member.roles.remove(ayarlar.yetkilirol))
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))


  
  const embed = new Discord.MessageEmbed()
  .setDescription(`Kullanıcıya başarıyla <@&${ayarlar.yetkilirol}> rolü verildi!`)
  .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
message.channel.send(embed)
  member.roles.add(ayarlar.yetkilirol)
  

}
exports.conf = {
    aliases: ["ky"],
    permLevel: 0
};

module.exports.help = {
    name: "kayıtyetkilisi",
}