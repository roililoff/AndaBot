const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':star: Send Mail')
            .setDescription('Send an email to be in the pub')
            .setColor('RED')
            .addField(':e_mail: Link »', 'lixt.org/publink')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .publink » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'publink'
}
