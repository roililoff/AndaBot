const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':trophy: OlypicGame')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':purple_circle: Next Game »', 'Paris')
            .addField(':red_circle: Due »', 'July 26 to August 11, 2024')
            .addField(':yellow_circle: Next Game »', 'Italie')
            .addField(':blue_circle: Due »', '2026')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .olympicgame » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'olympicgame'
}