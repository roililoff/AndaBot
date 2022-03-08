const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('')
            .setTitle(':star: Link')
            .setDescription('')
            .setColor('RED')
            .addField(':tada: AndaBot »', 'https://discord.com/oauth2/authorize?client_id=913236868525613077&scope=bot&permissions=0')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .link » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'link'
}