const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':crown: Top Economy')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':flag_us: United States »', '20,807.27B')
            .addField(':flag_ch: Chine »', '15,222.16B')
            .addField(':flag_jp: Japon »', '4,910.58')
            .addField(':flag_ge: Germany »', '3,780.55B')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .topeconomy » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'topeconomy'
}