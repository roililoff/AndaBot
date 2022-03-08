const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':push_pin: Statut')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':red_circle: MThe bot is »', 'Ofline')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('Andabot » Statut')
            .setTimestamp()
            .setURL(''))
    },
        name: '1234deco'
}