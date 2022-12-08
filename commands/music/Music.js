const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':musical_note: Music')
            .setDescription('The best PlayList/music')
            .setColor('ORANGE')
            .addField(':first_place: Best Songs »', '.song')
            .addField(':second_place: Best Playlist', '.playlist')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .music » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'music'
}
