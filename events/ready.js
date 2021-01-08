const chalk = require('chalk');
const client = require('discord.js')
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("invisible");
  /// online = Çevrimici
  /// dnd = Rahatsız Etme
  /// idle = Meşgul
  /// invisble = Çevrımdışı ( bot çalışır fakat çevrımdışı gözükür )
  client.user.setActivity(`Kayizer.COM | Kullanıcıları İçin V11 Altyapı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
