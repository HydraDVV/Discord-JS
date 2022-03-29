const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" HydraDVV v12 sürümüyle sizlerle")
.setTitle(" ➤HydraDVV Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **m!ping** : Botun pingini gösterir \n  **m!forceban** \n  **m!ban** \n **m!unban** \n **m!id** \n **m!küfür** \n **m!is** \n **m!sa-as** \n **m!kick** \n **m!sunucubilgi** \n **m!sil** \n **m!profil** \n **m!token** \n **m!yetkilerim** \n **m!link** \n  **m!üyedurum**\n **m!afk** \n **m!davet** ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}