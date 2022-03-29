const Discord = require('discord.js');



exports.run = (client, message, args) => {

  if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(`Bu komutu kullanabilmek için \`Kanalları Yönet\` yetkisine sahip olmalısın!`)//Hydra

message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
});
  
};

exports.config = {
  name: 'nuke',
  aliases: ['nk']
};
//Hydra 