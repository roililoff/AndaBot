const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Covid Stats')
            .setTitle(':full_moon: Earth Stats')
            .setDescription('Update 03/07/22')
            .setColor('GREEN')
            .addField(':bar_chart: Population »', '7.7B')
            .addField(':flag_us: Total Countries »', '195')
            .addField(':pushpin: Popular reason for death »', 'tumors, diseases of the circulatory system, diseases of the respiratory system and violent deaths')
            .addField(':calendar: Number of days »', '365')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .searth » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'searth'
}
