const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  
  let kayıtkanal = ayarlar.kayıtkanal
  var tag = ayarlar.tag 
  var kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
   if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));
  
  if(message.channel.id !== kayıtkanal) return message.channel.send(`** Bu komudu sadece <#${kayıtkanal}> adlı kanalda kullanabilirsin!**`)
  let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Bir Kullanıcı Belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
let isim = args[1]
if (!isim) return message.channel.send(`**İsmini Belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
let yaş = args[2]
if (!yaş) return message.channel.send(`**Yaşını Belirtmelisin!**`).then(x => x.delete({timeout: 5000}));// burayı değiştirebilirsiniz
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Belirtilen Kişinin Rolü Senle Eşit Ve ya Üstün Bü yüzden Kayıt Edemezsin!').then(x => x.delete({timeout: 5000}));

member.setNickname(`${tag} ${isim} | ${yaş}`)
  
  member.roles.remove(ayarlar.kayıtsızrol);
  member.roles.add(ayarlar.erkekrol)
  
  
  
  const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('2f3136')
.setDescription(`${member} Kullanıcının ismi \`${tag} ${isim} | ${yaş}\` olarak değiştirildi ve <@&${ayarlar.erkekrol}> rolü verildi! \n\n Yetkilinin Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.setThumbnail(client.user.avatarURL())
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
  .setTimestamp()
message.channel.send(embed)
  db.add(`kayıtsayı_${message.author.id}`, 1)
  
  
  client.channels.cache.get(ayarlar.chat).send(`${member} **Sunucumuza Hoşgeldin!**`)// burayı değiştirebilirsiniz
  
}

exports.conf = {
    aliases: ["e"],
    permLevel: 0
};

module.exports.help = {
    name: "erkek",
}


