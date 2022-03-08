const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Quiz#1')
            .setTitle(':tada: Best Quiz')
            .setDescription('Quiz of the week')
            .setColor('PURPLE')
            .addField(':milky_way: Quiz#1 »', 'https://quipoquiz.com/quiz/les-girafes/')
            .addField(':bridge_at_night: Quiz#2 »', 'https://www.buzzfeed.com/jonmichaelpoff/most-popular-us-baby-names-quiz')
            .addField(':city_sunset: Quiz#3 »', 'https://www.tryinteract.com/quiz/discover-your-inner-sea-animal/')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .quiz » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'quiz'
}
