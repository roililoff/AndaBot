const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Reddit of the Day')
            .setTitle(':eyes: Reddit Of The Day')
            .setDescription('Here is the best reddit of the day')
            .setColor('ORANGE')
            .addField(':tulip: Ukraine »', 'https://www.reddit.com/r/ukraine/')
             //To add another quiz, you just need to copy paste line 12 and modify it
            .setAuthor('')
            .setImage('https://www.leparisien.fr/resizer/Tg2qa2GeE8PXSFW2kJE5oXUGTOM=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/3C24CEOJCFCLJGRP2F63EJC5AE.jpg')
            .setThumbnail('')
            .setFooter('AndaBot .reddit » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'reddit' //The name of the command
}
