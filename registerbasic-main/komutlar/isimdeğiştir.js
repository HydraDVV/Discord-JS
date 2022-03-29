const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  var tag = ayarlar.tag
  
if(![ayarlar.yetkilirol].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission("ADMINISTRATOR")) 
  return message.channel.send(new MessageEmbed()

  .setAuthor(message.author.tag, message.author.avatarURL()({dynamic:true}))
  .setDescription(`${message.author} Bu Komutu Kullanmak İçin Yetkin Bulunmamakta!`)// burayı değiştirebilirsiniz
  .setColor('2f3136')).then(x => x.delete({timeout: 5000}));

  

  
  let kullanıcı = message.mentions.members.first();

  if (!kullanıcı) return message.channel.send(`**Lütfen Bir Kişi Etiketleyin!**`).then(x => x.delete({timeout: 5000}));
  let isim = args[1]
  if (!isim) return message.channel.send(`**Bir isim giriniz.**`).then(x => x.delete({timeout: 5000}));
  let yaş = args[2]
  if (!yaş) return message.channel.send(`** Bir yaş giriniz.**`).then(x => x.delete({timeout: 5000}));
  
  
  kullanıcı.setNickname(`${tag} ${isim} | ${yaş}`);

  const embed = new Discord.MessageEmbed()
    .setColor(`black`)
    .setDescription(`${kullanıcı} Adlı Kullanıcın İsmi Değiştirildi!`);
  message.channel.send(embed);
  message.react("✅")

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""]
};

exports.help = {
  name: "nick",
  description: "",
  usage: ""
};