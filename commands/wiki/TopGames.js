const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('')
            .setTitle(':tada: Play Games')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':snake: Snake »', 'https://www.google.com/fbx?fbx=snake_arcade')
            .addField(':purple_circle: Agario »', 'https://www.agar.io/')
            .addField(':t_rex: T-rex »', 'https://trex-runner.com/')
             //To add another quiz, you just need to copy paste line 12 and modify it
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .game » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'game' //The name of the command
}
