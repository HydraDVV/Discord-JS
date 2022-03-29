const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("HydraDVV v12 sürümüyle sizlerle")
.setTitle(" ➤HydraDVV Eğlence komutları" )
 .setTimestamp()
.setDescription(" **m!tersyazı** = Bir Yazıyı Bot Ters Yazar. < \n  **m!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **m!fbi** = Bot FBi Gif Atar. \n **m!token** = Tokenimi Öğrenmek İstemezmisin?  \n  **m!düello** = Düello Atarsın.  \n  **m!wasted** = Polis tarafından yakalanırsın.  \n  **m!atatürk** = Dene ve gör... (1881-1938) \n **m!ara155** = Polisi Arar \n **m!zar-at** = zar atar \n **m!yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n **m!1v1** = Arkadaşınla 1v1 at\ n **m!mcskin** = ismini yazdığınız skini gösterir")
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
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}