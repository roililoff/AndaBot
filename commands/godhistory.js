const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':red_circle: God religion')
            .setDescription('')
            .setColor('BLACK')
            .addField(':cross: christianity »', 'God')
            .addField(':mosque: Islamic »', 'Allah')
            .addField(':judge: Judaism »', 'Yahvé')
            .addField(':homes: Buddhism »', 'Bouddha')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .ghistory » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'ghistory'
}