const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle('> The text')
            .setDescription('')
            .setColor('RED')
            .addField('The text 1:', 'TEXT')
            .addField('The text 2:', 'TEXT')
            .addField('The text 3:', 'TEXT')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('')
            .setTimestamp()
            .setURL(''))
    },
    name: 'embed'
}
