const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':pushpin: Statut')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':red_circle: The bot is »', 'Ofline')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('Andabot » Statut')
            .setTimestamp()
            .setURL(''))
    },
        name: '1234of'
}