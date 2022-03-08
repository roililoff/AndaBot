const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':star: The biggest countries')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':flag_ru: Russia »', '11.0%')
            .addField(':flag.ca:', '6.1%')
            .addField(':flag_ch: China', '6.3%')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .bigcountry » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'bigcountry'
}