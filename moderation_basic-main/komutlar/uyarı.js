const Discord = require('discord.js')
const data = require('quick.db')
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
                     if (talkedRecently.has(message.author.id)) {
           return message.reply("``Komutu 5 Saniye Aralıklarla Kullanabilirsin.``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
let prefix = '-'// botun prefixi

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Yetkin yok.`)
if(!args[0]) return message.channel.send("```- Sistemi kullanmak için, !uyarı ekle/sil/bilgi komutlarını kullanın.``` \n\n```!uyarı ekle @Kişi (Sebep)```\n:cd: **Belirttiğiniz Kişiye Uyarı Ekler. ⤴**\n\n```!uyarı sil @Kişi (Adet)```\n:cd: **Belirttiğiniz Kişinin Uyarısını Siler. ⤴**\n\n```!uyarı bilgi (@Kişi)```\n:cd: **Belirttiğiniz Kişinin Uyarısını Bilgi Verir. ⤴** ")


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return message.channel.send(`Botları uyaramam.`)
if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)
let reason = args.slice(2).join(' ')

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
await message.channel.send(`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`)
await kullanıcı.send(`${kullanıcı}, Merhaba Ben **${message.guild.name}** Sunucusunda Bir Botum Ve Beni **Seni Uyarmam** İçin Gönderdiler.\n\n <:kapali:756096841367420989> Neden Uyarıldığını Bilmiyorum Ama Sen Yinede Dikkatli ol !`) 
return}

if(reason) {
await message.channel.send(`${kullanıcı}, uyarıldı!\nToplam uyarı sayısı: ${syı}`)
await kullanıcı.send(`${kullanıcı}, Merhaba Ben **${message.guild.name}** Sunucusunda Bir Botum Ve Beni **Seni Uyarmam** İçin Gönderdiler.\n\n <:kapali:756096841367420989>
 **${reason}** Sebebiyle Uyarıldın. Dikkatli ol ! `) 
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.id === message.author.id) return message.channel.send(`Kendini uyaramazsın.`)

let sayı = args[2]
if(!sayı) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)
if(isNaN(sayı)) return message.channel.send(`Silinecek uyarı sayısını yazmadın!`)
if(sayı === '0') return message.channel.send(`Beni mi kandırmaya çalışıyorsun sen?`)
const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(syı2 < sayı) return message.channel.send(`${kullanıcı}, kullanıcısının uyarı sayısı: ${syı2}! Sadece bu kadar silebilirsin.`)

data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, -sayı)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
await message.channel.send(`${kullanıcı}, uyarısı silindi!\nToplam uyarı sayısı: ${syı ? syı : '0'}`)
await kullanıcı.send(`${kullanıcı}, Merhaba! **${message.guild.name}** Sunucusunda **Uyarın Silindi**. Hadi İyisin Yine :smile:`) }

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
if(!args[1]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
if(!kullanıcı) return message.channel.send(`${args[1]}, kullanıcısını sunucuda bulamıyorum.`)

const syı2 = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
if(!syı2) return message.channel.send(`${kullanıcı}, kullanıcısının hiç uyarısı yok.`)
await message.channel.send(`${kullanıcı}\nToplam uyarı sayısı: ${syı2 ? syı2 : '0'}`) }
};
exports.config = {
  name: 'uyarı',
  aliases: ['warn']
};
