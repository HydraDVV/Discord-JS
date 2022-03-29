const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  
  
      if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));
  
  var tag = ayarlar.tag

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(` **Bir kişi etiketlemelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz


member.roles.set([ayarlar.kayıtsızrol])
member.setNickname(`${tag} İsim | Yaş`)

const luffyy = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription("**Kullanıcı Başarıyla Kayıtsıza Atıldı!**")
// burayı değiştirebilirsiniz

}
exports.conf = {
    aliases: ["unregister"],
    permLevel: 0
};

module.exports.help = {
    name: "kayıtsız",
}
