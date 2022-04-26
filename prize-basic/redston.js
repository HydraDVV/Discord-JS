const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const moment = require("moment");
const disbut = require('discord-buttons')
disbut(client);
const app = express();
const db = require('quick.db');

const fs = require("fs");

//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Founder of Destiny - </redston>");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`Destiny Ticaret - Pize Buttons Bot Altyapısı BOT AKTİF`);
});

client.login(ayarlar.token);

client.on("ready", async () => {
  console.log("Bot Başarıyla Ses Kanalına Bağlandı")
  let botVoiceChannel = client.channels.cache.get("SESLİ KANAL ID"); // BOTUNUZ SESLİ KANALDA DURMASI İÇİN BURAYA SESLİ KANAL ID GİRİN!
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanırken bir hata oluştu!"));
});


  let prize = "ÇEKİLİŞ KATILIMCISI ROL ID " // Çekiliş Katılımcısı ROL ID
  let activity = "ETKİNLİK KATILIMCISI ROL ID" // Etkinlik Katılımcısı ROL ID
  
//------------------OTOMESAJ
client.on('guildMemberAdd', async member  => {
  if(member.guild.id!= sunucu) return false;
 let member2 = member.user 
 let zaman = new Date().getTime() - member2.createdAt.getTime()
 var user = member2 
 var redstonzaman = [];
 if(zaman < 172800000) {
 redstonzaman = `Hesap Yeni Açılmış`
 } else {
 redstonzaman = `Hesap Yeni Açılmamış`}require("moment-duration-format");
   let zaman1 = new Date().getTime() - user.createdAt.getTime()
   const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    const redstonembed = new Discord.MessageEmbed()
    .setColor('#efff00')
     .setDescription(`**Hoş Geldin:** ${member}\n**Discord'a Kayıt Olma Süresi:** ${gecen}\n**Hesap Yeni Mi?:** ${redstonzaman}`)
 client.channels.cache.get(hosgeldin).send(redstonembed)
   
           });


//------------------OTOROL
client.on('guildMemberAdd', member => {
var role = member.guild.roles.cache.find(role => role.id == kayıtsız)
member.roles.add(role);
});


  
client.on('clickButton', (button) => {
  
  if (button.id === 'prize') {
    db.add(`prize_kayıt`,1)
     button.clicker.member.roles.add(prize); 
  }
    if (button.id === 'activity') {
    db.add(`activity_kayıt`,1)
     button.clicker.member.roles.add(activity); 
  }
})


client.on("ready",(button)=>{
  client.ws.on('INTERACTION_CREATE', async interaction => {
  
     if(interaction.data.custom_id=="prize"){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
          type: 4,
          data: {
              content: `<:dostlar:967195219995021332> **<@&967117373410770965> Rolünü başarıyla aldın, <#962111893420527706> açıldı çekilişlere katılım sağlayabilirsin.**`,    
              flags: "64"
            }
        }
    }); 

   };
   
      if(interaction.data.custom_id=="activity"){
     client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
          type: 4,
          data: {
              content: `<:dostlar:967195219995021332> **<@&967117374287384596> Rolünü başarıyla aldın, <#962111910948528179> açıldı etkinliklere katılım sağlayabilirsin.**`,    
              flags: "64"
            }
        }
   }); 

  };

    });
  });