const Discord = require('discord.js');

exports.run = async(client, message) => {
 
    message.channel.send(`**Pingim:** ` + client.ping + `ms`);

}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['ping'],
    permLevel : 0
}
 
exports.help = {
    name : 'ping',
    description : 'Pinginizi öğrenmeye yarar.',
    usage : 'ping'
}

/// VDS'iniz türkiye lokasyon ise 80-150 alması normaldir Discord'da türk serveri olmadığı için ping fazla olur Almanya lokasyon alırsanız daha az ping görürsünüz.