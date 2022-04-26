
const discord = require('discord.js');
const disbut = require('discord-buttons')
const client = new discord.Client();

exports.run = async (client, message, args) => { 

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Bu komutu kullanmaya yetkin yok bu komutu sadece <@927308195767156796> Kullanabilmektedir!** ');

    let button7 = new disbut.MessageButton()
    .setStyle('green') 
    .setLabel('🎁・Çekiliş Katılımcısı') 
    .setID('prize')
    let button8 = new disbut.MessageButton()
    .setStyle('blurple') 
    .setLabel('🎁・Etkinlik Katılımcısı') 
    .setID('activity')
    message.channel.send(" ", {
        buttons:[
            button7,button8
        ],
        embed:new discord.MessageEmbed().setColor("#3a73ff").setTitle(`BLA BLA BLA BLA X X X X X `).setThumbnail(`https://i.hizliresim.com/jc5koek.png`).setDescription("Aşağıda bulunan butonlara tıklayarak rol alabilirsiniz rolleri aldıktan sonra kanal açılacak sadece rolü olanlar görebilecek bilgin olsun!").addField(`Not;`,`Aşağıdan rolleri seçin kilitli kanallar açılacak, \n ÇEKİLİŞ KATILIMCISI ROL ID - ÇEKİLİŞ KANALI ID \n ETKİNLİK KATILIMCISI ROL ID - ETKİNLİK KANAL ID `)
    });

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destinyms'],
  permLevel: 0
};
 
exports.help = {
  name: 'destinyms'
};