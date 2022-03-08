const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('documentaries')
            .setTitle('')
            .setDescription('documentaries of the day')
            .setColor('YELLOW')
            .addField('Animals »', 'https://youtu.be/L7tWNwhSocE')
            .addField('Wont You Be My Neighbor? »', 'https://youtu.be/FhwktRDG_aQ')
             //To add another quiz, you just need to copy paste line 12 and modify it
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('03/03/22')
            .setTimestamp()
            .setURL(''))
    },
    name: 'doc' //The name of the command
}
