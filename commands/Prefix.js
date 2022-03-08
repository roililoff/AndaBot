const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':pushpin: Prefix')
            .setDescription('Want to change name')
            .setColor('PURPLE')
            .addField(':lock: Prefix »', 'Please write in the chat your new name, You dont have the permit')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .prefix » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'prefix'
}
