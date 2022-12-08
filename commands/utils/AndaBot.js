const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':pushpin: AndaBot')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':crown: Creator »', 'roilil')
            .addField(':coin: Version', '1.0.0')
            .addField(':hammer: Developer', 'Lixt Staff')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .andabot » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'andabot'
}
