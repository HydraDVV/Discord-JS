const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run= async (client, message, args) => {       

let tag = ayarlar.tag

   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(tag)).size;
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;

const embed = new Discord.MessageEmbed()
.setDescription(`
 > Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
 > Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
 > Tagımızda Toplam **${Taglı}** kullanıcı bulunmaktadır.
 > Seste **${Voice}** kullanıcı bulunmaktadır.
 > Sunucuya toplam **${Boost}** takviye yapılmıştır. 
`)
message.channel.send(embed)



}

exports.conf = {
    aliases: [""],
    permLevel: 0
};

module.exports.help = {
    name: "say",
}
