const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setTitle('Command Moderator')
            .setDescription('» The command')
            .setColor('GREEN')
            .addField(':boom: Ban »', '.ban')
            .addField(':star: Mute »', '.mute')
            .addField(':bar_chart: Warn »', '.warn')
            .addField(':waxing_gibbous_moon: UnMute »', '.unmute')
            .addField(':lock: UnWarn »', '.unwarn')
            .addField(':pushpin: Clear »', '.clear')
            .addField(':brain: Kick »', '.kick')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .mod » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'mod'
}
