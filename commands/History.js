const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':bulb: Earth')
            .setDescription('stories from around the world')
            .setColor('PURPLE')
            .addField(':flag_fr: The countries »', '.countries')
            .addField(':star: God Story »', '.ghistory')
            .addField(':stadium: Olympic Game »', '.olympicGame')
            .addField(':gear: Top Economy »', '.topeconomy')
            .addField(':hammer_pick: Top Army »', '.toparmy')
            .addField(':snail: Biggest Countries »', '.bigcountry')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .history » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'earth'
}
