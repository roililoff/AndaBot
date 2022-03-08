const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':pencil: Pyblicity')
            .setDescription('Be in our advertising')
            .setColor('RED')
            .addField(':bar_chart: You have to»', '.publink')
            .addField(':pushpin: Discord »', 'Please put your discord in the mail')
            .addField(':eyes: Your Discord »', '.yourdiscord')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .pub » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'pub'
}
