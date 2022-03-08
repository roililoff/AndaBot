const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':eyes: Change statut')
            .setDescription('')
            .setColor('RED')
            .addField(':lock: Statut »', 'Please write in the chat your new status, You dont have the permit')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .statut » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'statut'
}
