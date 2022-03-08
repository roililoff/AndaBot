const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':crystal_ball: Boost')
            .setDescription('Best Members')
            .setColor('ORANGE')
            .addField(':star: Boost »', 'https://discord.com/nitro')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .boost » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'boost'
}
