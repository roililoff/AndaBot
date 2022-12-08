const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setTitle(':lock: Command tools = off')
            .setDescription('» The command')
            .setColor('GREEN')
            .addField(':pushpin: Prefix »', '.prefix')
            .addField(':bird: Avatar »', '.avatar')
            .addField(':crown: Statut »', '.statut')
            .addField(':shield: Boost »', '.boost')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .tools » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'tools'
}
