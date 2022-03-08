const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':bird: Avatar')
            .setDescription('New Avatar')
            .setColor('RED')
            .addField(':lock: Avatar »', 'Please put picture in chat, You dont have the permit')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .avatar » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'avatar'
}
