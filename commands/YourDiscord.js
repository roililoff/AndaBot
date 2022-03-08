const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':star: Your Discord')
            .setDescription('The best Discord')
            .setColor('RED')
            .addField(':first_place: Sapiar »', 'https://discord.gg/4KWdSspPxT')
            .addField(':second_place: Lineria »', 'https://discord.gg/6jDejPRjNh')
            .addField(':third_place: xtra »', 'https://discord.gg/9knPSXzQZE')
            .addField(':eyes: Update »', 'Every day')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .yourdiscord » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'yourdiscord'
}
