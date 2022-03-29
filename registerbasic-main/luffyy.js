const discord = require('discord.js');
const client = new discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const ms = require('ms');


var prefix = ayarlar.prefix;


const log = message => {
    console.log(`${message}`);
};

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});




///----------------------- HOŞGELDİN MESAJI KISMI -----------------------\\\\  



client.on('guildMemberAdd', async member => {//alıntıdır!!!!!
   await member.roles.add(ayarlar.kayıtsızrol) 
   await member.setNickname(`İsim | Yaş`) //Bu Komut Sunucuya Gelen Kişinin İsmini Düzenler Değiştirebilirsiniz!
let member2 = member.user 
let sunuc = ayarlar.sunucuismi
let yetkili = ayarlar.yetkilirol
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Bu Kullanıcı Şüpheli!'
} else {
takizaman = `Bu Kullanıcı Güvenli!`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.client.channels.cache.get(ayarlar.girişkanal) 
   const kevzyy = new kevzyy.MessageEmbed()
    .setTitle(
      `WELCOME TO ${sunuc}`
    )
    .setDescription(`
Sunucumuza Hoş geldin ${member} 

Seninle Beraber **${message.guild.memberCount}** Kişiyiz.

Kaydının Yapılması İçin Sesli Odaya Geçerek Ses Vermen Gerekli.

<@&${yetkili}> Rolündeki Yetkililer Seninle İlgilenecektir.

Hesap Açılalı: **${gecen}** Olmuş.
Bu Kullanıcı: **${takizaman}**
`)
.setColor('2f3136')
message.send(kevzyy)
  
          });

////----------------------- HOŞGELDİN MESAJI KISMI -----------------------\\\\ 

client.on('guildMemberAdd', async member => {//burayı elleme!!!
  let yetkili = ayarlar.yetkilirol
  client.channels.cache.get(ayarlar.girişkanal).send(`<@&${yetkili}>`)
})
