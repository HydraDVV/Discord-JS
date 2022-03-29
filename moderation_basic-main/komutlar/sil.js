const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" **Bu Komutu Kullanmak İçin İzniniz Yok**");//Hydra
if(!args[0]) return message.channel.send("  **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` **${args[0]}** **Adet Mesajı Sildim**`).then(matador => matador.delete({ timeout: 5000}));
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};//Hydra