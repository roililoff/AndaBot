const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':video_game: The Best Team Esport')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':first_place: Team Liquid »', '2163 tournaments')
            .addField(':second_place: Team OG »', '130 tournaments')
            .addField(':third_place: Team Evil Geniuses »', '908 tournaments')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('Andabot .topesport » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'topesport'
}
