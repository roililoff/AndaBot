const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':musical_note: Music')
            .setDescription('The best Music')
            .setColor('ORANGE')
            .addField(':first_place: Chainsmoking »', 'https://music.youtube.com/watch?v=pO0hU0QxF08&list=RDTMAK5uy_kset8DisdE7LSD4TNjEVvrKRTmG7a56sY')
            .addField(':second_place: Blame', 'https://music.youtube.com/watch?v=FwJwwBv-d0Q&feature=share')
            .addField(':third_place: Dans univers', 'https://music.youtube.com/watch?v=gu-VwjIRy3g&feature=share')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .song » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'song'
}
