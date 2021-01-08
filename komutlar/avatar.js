const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let kullanıcı = message.mentions.members.first() 
if(kullanıcı){ 
const embed = new Discord.RichEmbed()
.setTitle("İstediğiniz kişinin avatarı buyrun!")
.setColor("RANDOM")
.setImage(kullanıcı.user.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send(embed)
} else {
const embed = new Discord.RichEmbed()
.setTitle("Avatarınız:")
.setColor("RANDOM")
.setImage(message.author.avatarURL)
message.channel.send(embed)

}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profil" , "avatar"],
  permLevel: 0
};

exports.help = {
  name: 'avatar', 
  description: "Avatar",
  usage: 'avatar'
};
 