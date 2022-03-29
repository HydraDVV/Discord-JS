const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("HydraDVV bot ")
.setTitle(" ➤HydraDVV Bot Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(" **m!avatar** = Avatarınıza bakarsınız.  \n  **m!yetkilerim** = Yetkilerini görürsün. \n  **m!profil** = Profilini görürsün.  \n **m!sunucuresmi** = Sunucu resmini gösterir.  \n  **m!ping** = Botun Pingine Bakarsın. \n **m!id** = Birisinin id'sine Bakarsın. \n  **m!davet** = Beni Sunucuna Ekle.  \n  **m!botbilgi** = Bot istatistiklerini görürsünüz.  ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}