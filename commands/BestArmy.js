const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':rocket: Top army')
            .setDescription('')
            .setColor('GREEN')
            .addField(':flag_us: United States »', 'First Biggest Army')
            .addField(':flag_ru: Russia', 'Second largest army')
            .addField(':flag_ch: China', 'Third largest army')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .toparmy » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'toparmy'
}