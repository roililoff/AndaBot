const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':push_pin: Statut')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':green_circle: MThe bot is »', 'Online')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('Andabot » Statut')
            .setTimestamp()
            .setURL(''))
    },
        name: '1234co'
}