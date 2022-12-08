const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':pushpin: Help')
            .setDescription('')
            .setColor('GREEN')
            .addField(':video_game: Join Discord »', 'https://discord.gg/sWw8RQxfuw')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .support » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'support'
}
